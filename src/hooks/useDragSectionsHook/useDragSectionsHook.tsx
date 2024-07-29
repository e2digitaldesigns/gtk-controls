import * as React from "react";
import { useSectionDataStore } from "../../dataStores";

enum DragDropStates {
  DragStart = "dragstart",
  DragEnd = "dragend"
}

enum TransferActions {
  Move = "move",
  Swap = "swap"
}

enum TransferProperties {
  Action = "action",
  OriginId = "originId"
}

type TAllowDrop = (e: React.DragEvent<HTMLDivElement>) => void;
type TDragEnd = (e: React.DragEvent<HTMLDivElement>) => void;
type TDragOver = (e: React.DragEvent<HTMLDivElement>) => void;
type TDragStart = (e: React.DragEvent<HTMLDivElement>) => void;
type TItemDrop = (e: React.DragEvent<HTMLDivElement>, destinationId: string) => void;

interface IntUseDragDropHook {
  handleDragOver: TAllowDrop;
  dragDropRef: any;
  handleDragLeave: TDragEnd;
  handleDragEnter: TDragOver;
  handleDrop: TItemDrop;
  isDragOver: boolean;
}

const useDragSectionsHook = (sectionId: string): IntUseDragDropHook => {
  const dragDropRef = React.useRef<any>(null);
  const [isDragOver, setIsdragOver] = React.useState<boolean>(false);
  const { swapSectionSlots, updateSectionSlots } = useSectionDataStore();

  React.useEffect(() => {
    let dragDropRefCleanUp = dragDropRef.current;

    const menuDragEnd: TDragEnd = e => {};

    const menuDragStart: TDragStart = e => {
      if (e?.dataTransfer?.setData) {
        e.dataTransfer.setData(
          TransferProperties.Action,
          e.ctrlKey ? TransferActions.Swap : TransferActions.Move
        );
        e.dataTransfer.setData(TransferProperties.OriginId, sectionId);
      }
    };

    dragDropRefCleanUp?.addEventListener(
      DragDropStates.DragStart,
      (e: React.DragEvent<HTMLDivElement>) => menuDragStart(e)
    );

    dragDropRefCleanUp?.addEventListener(
      DragDropStates.DragEnd,
      (e: React.DragEvent<HTMLDivElement>) => menuDragEnd(e)
    );

    return () => {
      dragDropRefCleanUp?.removeEventListener(
        DragDropStates.DragStart,
        (e: React.DragEvent<HTMLDivElement>) => menuDragStart(e)
      );

      dragDropRefCleanUp?.removeEventListener(
        DragDropStates.DragEnd,
        (e: React.DragEvent<HTMLDivElement>) => menuDragEnd(e)
      );

      dragDropRefCleanUp = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDragOver: TAllowDrop = e => {
    e.preventDefault();
  };

  const handleDragLeave: TDragEnd = e => {
    // console.clear();

    //if target is child of dragdropRef then return
    // if (dragDropRef.current.contains(e.target)) {
    //   console.log("drag leave child");
    //   return;
    // }

    console.log(93, dragDropRef.current);

    //if target is a sibling of dragdropRef then return
    if ((dragDropRef.current as HTMLElement).parentNode === (e.target as HTMLElement).parentNode) {
      console.log("drag leave sibling");
      return;
    }

    console.log("drag leave");

    setIsdragOver(false);
  };

  const handleDragEnter: TDragOver = () => {
    setIsdragOver(true);
  };

  const handleDrop: TItemDrop = (e, destinationId) => {
    setIsdragOver(false);

    const originId = e.dataTransfer.getData(TransferProperties.OriginId);
    const action = e.dataTransfer.getData(TransferProperties.Action);

    if (action === TransferActions.Swap) {
      swapSectionSlots(originId, destinationId);
    } else if (action === TransferActions.Move) {
      updateSectionSlots(originId, destinationId);
    }
  };

  return {
    handleDragOver,
    dragDropRef,
    handleDragLeave,
    handleDragEnter,
    handleDrop,
    isDragOver
  };
};

export default useDragSectionsHook;
