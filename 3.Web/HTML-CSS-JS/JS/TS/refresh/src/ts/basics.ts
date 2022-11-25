type coords = {
  x: number;
  y: number;
};

type song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

let coordinate: coords = { x: 50, y: 10 };

function randomCoords(): coords {
  return {
    x: Math.floor(Math.random()) * 1.5,
    y: Math.floor(Math.random()) * 0.3,
  };
}

function doublePoint(point: coords): coords {
  return {
    x: point.x,
    y: point.y,
  };
}

function calculatePay(music: song): number {
  const baseRate = 0.01;
  const baseFee = music.numStreams * baseRate;
  const finalAmount = baseFee + music.numStreams / 500;

  return +finalAmount.toFixed(2);
}

function detMusic(music: song): string {
  return `
    Title: ${music.title},
    Artist: ${music.artist},
    Streams: ${music.numStreams},
    Producer: ${music.credits.producer},
    Writer: ${music.credits.writer}
    `;
}

const box: song = {
  title: "The Box",
  artist: "Roddy Ritch",
  numStreams: 4567234,
  credits: {
    producer: "Black Label",
    writer: "Roddy Ritch",
  },
};

const boxMoney = calculatePay(box);

console.log(`${detMusic(box)} has made $${boxMoney} from spotify streams.`);
