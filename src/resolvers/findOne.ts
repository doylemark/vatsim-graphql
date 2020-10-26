const findOne = <T extends { callsign: string }>(data: T[], callsign: string) => {
  if (!data) {
    return null;
  }

  const result = data.find((item) => item.callsign === callsign);

  return result || null;
};

export default findOne;
