const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateBrakingDistance(initialVelocity, deceleration) {
  const brakingDistance = (initialVelocity ** 2) / (2 * deceleration);
  return brakingDistance;
}

rl.question('Введите начальную скорость (в м/с): ', (initialVelocity) => {
  rl.question('Введите ускорение торможения (в м/с²): ', (deceleration) => {
    const brakingDistance = calculateBrakingDistance(parseFloat(initialVelocity), parseFloat(deceleration));
    console.log(`Тормозной путь: ${brakingDistance.toFixed(2)} м`);
    rl.close();
  });
});

rl.on('close', () => {
  process.exit(0);
});

module.exports = calculateBrakingDistance;