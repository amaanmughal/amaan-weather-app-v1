function LocationFormat({ currLocation }) {
  let unformatedDate = currLocation.localtime;
  let formattedDate = new Date(unformatedDate);
  let stringDate = formattedDate.toString();
  let splitDate = stringDate.split(" ");

  return (
    <>
      <p>
        {splitDate[0]}, {splitDate[2]} {splitDate[1]} {splitDate[3]} |{" "}
        {splitDate[4]}
      </p>
      <h1>
        {currLocation.name}, {currLocation.country}
      </h1>
    </>
  );
}

export default LocationFormat;
