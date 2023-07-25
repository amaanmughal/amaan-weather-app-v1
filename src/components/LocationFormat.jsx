function LocationFormat({ currLocation }) {
  let unformatedDate = currLocation.localtime;
  let formattedDate = new Date(unformatedDate);
  let stringDate = formattedDate.toString();
  let splitDate = stringDate.split(" ");

  return (
    <>
      <h1 id="location_name">
        {currLocation.name}, {currLocation.country}
      </h1>
      <p id="location_time">
        {splitDate[0]}, {splitDate[2]} {splitDate[1]} {splitDate[3]} |{" "}
        {splitDate[4]}
      </p>
    </>
  );
}

export default LocationFormat;
