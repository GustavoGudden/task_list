export const formatDate = (dateString: Date | null) => {
  if (dateString === null) return;
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Os meses em JavaScript são baseados em zero
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Formata os componentes de data e hora como string com dois dígitos
  const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year} - ${hours
    .toString()
    .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return formattedDate;
};
