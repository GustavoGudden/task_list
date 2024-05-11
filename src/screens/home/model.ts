import { TaskModel } from '@common/types/task.model';

export interface HomeModel {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  sheetVisible: boolean;
  setSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectFilter: number;
  setSelectFilter: React.Dispatch<React.SetStateAction<number>>;
  newtaskForm: TaskModel;
  setTaskForm: React.Dispatch<React.SetStateAction<TaskModel>>;
  isOptionSheet: boolean;
  setIsOptionSheet: React.Dispatch<React.SetStateAction<boolean>>;
  selectTask: number;
  setSelectTask: React.Dispatch<React.SetStateAction<number>>;
  HandleCreateTask: (task: TaskModel) => void;
  OpenSheet: () => void;
  CloseSheet: () => void;
  handleOpenOptionsBottomSheet: (index: number) => void;
  handleFinishTask: (index: number) => void;
  handleArhivedTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
  onChange: (event: any, selectedDate: any) => void;
  showDatepicker: (currentValue: Date | null) => void;
  handleRetornData: (taskData: TaskModel[]) => TaskModel[];
}
