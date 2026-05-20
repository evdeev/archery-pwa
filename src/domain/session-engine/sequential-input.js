export function getNextShotPosition(session, current) {
  const flatShots = flattenSessionShots(session);
  const currentIndex = flatShots.findIndex(position =>
    position.roundIndex === current.roundIndex &&
    position.seriesIndex === current.seriesIndex &&
    position.shotIndex === current.shotIndex
  );

  return flatShots[currentIndex + 1] ?? current;
}

export function getFirstEmptyShotPosition(session) {
  return flattenSessionShots(session).find(position => {
    const shot = session.rounds[position.roundIndex]
      .series[position.seriesIndex]
      .shots[position.shotIndex];

    return shot === null;
  }) ?? null;
}

export function canEditShot(session, position) {
  const firstEmpty = getFirstEmptyShotPosition(session);

  if (!firstEmpty) {
    return true;
  }

  const targetIndex = getFlatShotIndex(session, position);
  const firstEmptyIndex = getFlatShotIndex(session, firstEmpty);

  return targetIndex <= firstEmptyIndex;
}

function getFlatShotIndex(session, position) {
  return flattenSessionShots(session).findIndex(item =>
    item.roundIndex === position.roundIndex &&
    item.seriesIndex === position.seriesIndex &&
    item.shotIndex === position.shotIndex
  );
}

function flattenSessionShots(session) {
  return session.rounds.flatMap((round, roundIndex) =>
    round.series.flatMap((series, seriesIndex) =>
      series.shots.map((_, shotIndex) => ({
        roundIndex,
        seriesIndex,
        shotIndex
      }))
    )
  );
}
