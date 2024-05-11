import { useState } from 'react';
import { HomeModel } from './model';
import { TaskModel } from '@common/types/task.model';
import { TaskData } from '@data/TaskData';

export const HomeViewModel = (): HomeModel => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [selectFilter, setSelectFilter] = useState(0);
  const [newtaskForm, setTaskForm] = useState<TaskModel>({
    title: '',
    description: '',
    status: 'OPEN',
    initialDate: new Date(),
    endDate: new Date(),
  });
  const [isOptionSheet, setIsOptionSheet] = useState(false);
  const [selectTask, setSelectTask] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  function OpenSheet() {
    setIsOptionSheet(false);
    setSheetVisible(true);
  }

  function CloseSheet() {
    setSheetVisible(false);
  }

  function HandleCreateTask(task: TaskModel) {
    task.status = 'OPEN';
    TaskData.push(task);
    setTaskForm({
      title: '',
      description: '',
      status: 'OPEN',
      initialDate: new Date(),
      endDate: new Date(),
    });
    setSheetVisible(false);
  }

  function handleOpenOptionsBottomSheet(index: number) {
    setIsOptionSheet(true);
    setSheetVisible(true);
    setSelectTask(index);
  }

  function handleFinishTask(index: number) {
    TaskData[index].status = 'CLOSE';
    setSheetVisible(false);
  }

  function handleArhivedTask(index: number) {
    TaskData[index].status = 'ARCHIVED';
    setSheetVisible(false);
  }

  function handleDeleteTask(index: number) {
    TaskData.splice(index, 1);
    setSheetVisible(false);
  }

  return {
    modalVisible,
    setModalVisible,
    sheetVisible,
    setSheetVisible,
    isOptionSheet,
    setIsOptionSheet,
    handleOpenOptionsBottomSheet,
    OpenSheet,
    CloseSheet,
    selectFilter,
    setSelectFilter,
    newtaskForm,
    setTaskForm,
    HandleCreateTask,
    handleFinishTask,
    handleArhivedTask,
    handleDeleteTask,
    selectTask,
    setSelectTask,
  };
};
function indexOf(category: { category: string }) {
  throw new Error('Function not implemented.');
}
