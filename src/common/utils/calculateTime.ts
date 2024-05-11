import { TaskModel } from '@common/types/task.model';

export function calculateTimeDifference(obj: TaskModel) {
  if (!obj.initialDate) {
    return;
  }
  const today = new Date();
  const initialDate = new Date(obj.initialDate);

  const timeDifference = Math.floor((today.getTime() - initialDate.getTime()) / (1000 * 60 * 60 * 24));

  if (timeDifference === 0) {
    return 'Today';
  } else if (timeDifference === 1) {
    return 'Yesterday';
  } else if (timeDifference >= 2 && timeDifference <= 3) {
    return '2 or 3 days ago';
  } else {
    return `${timeDifference} days ago`;
  }
}
