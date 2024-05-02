const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function timestampToDateTime(timestamp: number) {
  
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const monthNumber = date.getMonth(); 
  const year = date.getFullYear();
  

  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  const formattedDate = {
    day: day,
    month: months[monthNumber],
    year: year,
    hours: hours,
    minutes: minutes,
    toString: () => `${day} ${months[monthNumber]} ${year}, ${hours}:${minutes > 9 ? minutes : "0" + minutes}`,
  };

  return formattedDate;
}