import React, { useEffect, useRef } from "react";
import { BarTask } from "../../types/bar-task";
import { Task } from "../../types/public-types";

export type TaskListProps = {
  headerHeight: number;
  rowWidth: string;
  taskWidth: number;
  rightSideElement:any;
  dateTimeStartComponent:any;
  dateTimeEndComponent:any;
  isShown:any;
  fetchData: () => void;
  onClickTask: (task_id: string) => void;
  fontFamily: string;
  fontSize: string;
  rowHeight: number;
  ganttHeight: number;
  scrollY: number;
  locale: string;
  tasks: Task[];
  taskListRef: React.RefObject<HTMLDivElement>;
  horizontalContainerClass?: string;
  selectedTask: BarTask | undefined;
  setSelectedTask: (task: string) => void;
  onExpanderClick: (task: Task) => void;
  TaskListHeader: React.FC<{
    headerHeight: number;
    rowWidth: string;
    taskWidth: number;
    fontFamily: string;
    fontSize: string;
    isShown: any;
  }>;
  TaskListTable: React.FC<{
    rowHeight: number;
    rowWidth: string;
    taskWidth: number;
    fontFamily: string;
    fontSize: string;
    locale: string;
    tasks: Task[];
    selectedTaskId: string;
    rightSideElement: any;
    dateTimeStartComponent: any;
    dateTimeEndComponent: any;
    isShown:any;
    fetchData: () => void;
    onClickTask: (task_id: string) => void,
    setSelectedTask: (taskId: string) => void;
    onExpanderClick: (task: Task) => void;
  }>;
};

export const TaskList: React.FC<TaskListProps> = ({
  headerHeight,
  fontFamily,
  fontSize,
  rowWidth,
  taskWidth,
  rightSideElement,
  dateTimeStartComponent,
  dateTimeEndComponent,
  isShown,
  fetchData,
  onClickTask,
  rowHeight,
  scrollY,
  tasks,
  selectedTask,
  setSelectedTask,
  onExpanderClick,
  locale,
  ganttHeight,
  taskListRef,
  horizontalContainerClass,
  TaskListHeader,
  TaskListTable,
}) => {
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (horizontalContainerRef.current) {
      horizontalContainerRef.current.scrollTop = scrollY;
    }
  }, [scrollY]);

  const headerProps = {
    headerHeight,
    fontFamily,
    fontSize,
    rowWidth,
    taskWidth,
    isShown,
  };
  const selectedTaskId = selectedTask ? selectedTask.id : "";
  const tableProps = {
    rowHeight,
    rowWidth,
    taskWidth,
    rightSideElement,
    dateTimeStartComponent,
    dateTimeEndComponent,
    isShown,
    fetchData,
    onClickTask,
    fontFamily,
    fontSize,
    tasks,
    locale,
    selectedTaskId: selectedTaskId,
    setSelectedTask,
    onExpanderClick,
  };

  return (
    <div ref={taskListRef}>
      <TaskListHeader {...headerProps} />
      <div
        ref={horizontalContainerRef}
        className={horizontalContainerClass}
        style={ganttHeight ? { height: ganttHeight } : {}}
      >
        <TaskListTable {...tableProps} />
      </div>
    </div>
  );
};