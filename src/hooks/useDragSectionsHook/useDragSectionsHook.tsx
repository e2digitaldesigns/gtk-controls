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

type TDragEnd = (e: React.DragEvent<HTMLDivElement>) => void;
type TDragStart = (e: React.DragEvent<HTMLDivElement>) => void;

type OnDragEnter = (e: React.DragEvent<HTMLDivElement>) => void;
type OnDragLeave = (e: React.DragEvent<HTMLDivElement>) => void;
type OnDragOver = (e: React.DragEvent<HTMLDivElement>) => void;
type OnDrop = (e: React.DragEvent<HTMLDivElement>, destinationId: string) => void;

interface IntUseDragDropHook {
  dragDropRef: React.MutableRefObject<HTMLDivElement | null>;
  ghostImageRef: React.MutableRefObject<HTMLDivElement | null>;

  handleOnDrop: OnDrop;
  isDragOver: boolean;

  handleOnDragLeave: OnDragLeave;
  handleOnDragEnter: OnDragEnter;
  handleOnDragOver: OnDragOver;
}

const useDragSectionsHook = (sectionId: string): IntUseDragDropHook => {
  const dragDropRef = React.useRef<any>(null);
  const ghostImageRef = React.useRef<HTMLDivElement | null>(null);
  const [isDragOver, setIsdragOver] = React.useState<boolean>(false);
  const { swapSectionSlots, updateSectionSlots } = useSectionDataStore();

  React.useEffect(() => {
    let dragDropRefCleanUp = dragDropRef.current;

    const elementDragEnd: TDragEnd = e => {
      console.log("drag end");
    };

    const elementDragStart: TDragStart = e => {
      if (e?.dataTransfer?.setData) {
        e.dataTransfer.setData(
          TransferProperties.Action,
          e.ctrlKey ? TransferActions.Swap : TransferActions.Move
        );
        e.dataTransfer.setData(TransferProperties.OriginId, sectionId);

        if (ghostImageRef.current) {
          e.dataTransfer.setDragImage(ghostImageRef.current, 0, 0);
        }
      }
    };

    dragDropRefCleanUp?.addEventListener(
      DragDropStates.DragStart,
      (e: React.DragEvent<HTMLDivElement>) => elementDragStart(e)
    );

    dragDropRefCleanUp?.addEventListener(
      DragDropStates.DragEnd,
      (e: React.DragEvent<HTMLDivElement>) => elementDragEnd(e)
    );

    return () => {
      dragDropRefCleanUp?.removeEventListener(
        DragDropStates.DragStart,
        (e: React.DragEvent<HTMLDivElement>) => elementDragStart(e)
      );

      dragDropRefCleanUp?.removeEventListener(
        DragDropStates.DragEnd,
        (e: React.DragEvent<HTMLDivElement>) => elementDragEnd(e)
      );

      dragDropRefCleanUp = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnDragOver: OnDragOver = e => {
    e.preventDefault();
  };

  const handleOnDragLeave: OnDragLeave = e => {
    setIsdragOver(false);
  };

  const handleOnDragEnter: OnDragEnter = () => {
    setIsdragOver(true);
  };

  const handleOnDrop: OnDrop = (e, destinationId) => {
    e.preventDefault();
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
    handleOnDragOver,
    dragDropRef,
    handleOnDragLeave,
    handleOnDragEnter,
    handleOnDrop,
    isDragOver,
    ghostImageRef
  };
};

export default useDragSectionsHook;
