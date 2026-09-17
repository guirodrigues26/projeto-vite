export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };
};

export type TaskModel = {
    id: string;
    name: string;
    startDate: Date;
    completeDate: Date | null;
    interruptDate: Date | null;
    duration: number;
    type: "work" | "short" | "long";
};