const formatter = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'short',
  month: 'long',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

const formatDate = (date: Date): string => formatter.format(new Date(date));

export default formatDate;
