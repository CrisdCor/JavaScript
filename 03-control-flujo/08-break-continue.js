let i = 0;

while (i < 6) {
  i++;
  if (i === 2) {
    continue;
  }

  console.log(i);
}

while (i < 6) {
  i++;
  if (i === 4) {
    break;
  }

  console.log(i);
}
