import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AlertTriangle, Plus } from 'lucide-react-native';
import { BottomSheet } from '@components/ui/sheet';
import { NewTaskForm } from '@components/common/taskform';
import { ButtonComponent } from '@components/ui/button';
import { TaskComponent } from '@components/common/task';
import { ChipComponent } from '@components/ui/chip';
import { MocksCategory } from '@mocks/taskFilterMock';
import { HomeViewModel } from './view-model';
import { TaskData } from '@data/TaskData';
import { TaskModel } from '@common/types/task.model';
import { OptionsTask } from '@components/common/OptionsTask';
import { Modal } from '@components/ui/modal';

export const ViewHome = () => {
  const {
    setModalVisible,
    modalVisible,
    handleRetornData,
    CloseSheet,
    OpenSheet,
    sheetVisible,
    selectFilter,
    setSelectFilter,
    newtaskForm,
    setTaskForm,
    HandleCreateTask,
    handleOpenOptionsBottomSheet,
    isOptionSheet,
    handleArhivedTask,
    handleDeleteTask,
    handleFinishTask,
    selectTask,
    showDatepicker,
  } = HomeViewModel();

  console.log(selectFilter);

  return (
    <>
      <SafeAreaView className="px-5 py-8 gap-6 flex-1 bg-[#F8FAFC] relative">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-[20px] font-[600] text-slate-800">Today’s Tasks</Text>
            <Text className="text-sm font-[500] text-slate-500">Wednesday, 11 May</Text>
          </View>
          <View>
            <ButtonComponent
              label="New task"
              className="px-4 py-2 rounded-lg bg-blue-100 flex-row items-center"
              textClassName="font-[500] text-sm text-blue-700"
              icon={<Plus size={24} color={'#1D4ED8'} />}
              press={OpenSheet}
            />
          </View>
        </View>
        <View className="flex-row justify-between ">
          {MocksCategory.map((category, index) => (
            <TouchableOpacity onPress={() => setSelectFilter(index)} key={index}>
              <ChipComponent label={category.category.toLocaleLowerCase()} number="35" isSelect={selectFilter === index ? true : false} />
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-1">
          {TaskData.length === 0 ? (
            <View className="items-center justify-center flex-1">
              <AlertTriangle size={100} color={'#64748B'} />
              <Text className="text-xl font-[400]">Nenhuma Task encontrada</Text>
            </View>
          ) : (
            handleRetornData(TaskData).map((task: TaskModel, index) => (
              <TouchableOpacity key={index} onLongPress={() => handleOpenOptionsBottomSheet(index)}>
                <TaskComponent task={task} />
              </TouchableOpacity>
            ))
          )}
        </View>
      </SafeAreaView>
      {sheetVisible &&
        (isOptionSheet ? (
          <BottomSheet
            open={OpenSheet}
            closeSheet={CloseSheet}
            body={
              <OptionsTask
                index={selectTask}
                setOpenModal={setModalVisible}
                handleArhivedTask={handleArhivedTask}
                handleFinishTask={handleFinishTask}
              />
            }
          />
        ) : (
          <>
            <BottomSheet
              open={OpenSheet}
              closeSheet={CloseSheet}
              body={
                <NewTaskForm
                  newtaskForm={newtaskForm}
                  setTaskForm={setTaskForm}
                  showDatepicker={showDatepicker}
                  HandleCreateTask={HandleCreateTask}
                  oncloseBottomSheet={CloseSheet}
                />
              }
            />
          </>
        ))}
      {modalVisible && <Modal handleDeleteTask={handleDeleteTask} setModalVisible={setModalVisible} index={selectTask} />}
    </>
  );
};
