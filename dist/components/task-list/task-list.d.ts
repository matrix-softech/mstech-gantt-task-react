import React from "react";
import { BarTask } from "../../types/bar-task";
import { Task } from "../../types/public-types";
export declare type TaskListProps = {
    headerHeight: number;
    rowWidth: string;
    taskWidth: number;
    rightSideElement: any;
    progressBarElement: any;
    dateTimeStartComponent: any;
    dateTimeEndComponent: any;
    isShown: any;
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
        progressBarElement: any;
        dateTimeStartComponent: any;
        dateTimeEndComponent: any;
        isShown: any;
        fetchData: () => void;
        onClickTask: (task_id: string) => void;
        setSelectedTask: (taskId: string) => void;
        onExpanderClick: (task: Task) => void;
    }>;
};
export declare const TaskList: React.FC<TaskListProps>;
