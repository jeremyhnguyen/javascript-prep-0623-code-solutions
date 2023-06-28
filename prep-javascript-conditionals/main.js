const age = 26;

function isAdult(age) {
  if (age < 18) {
    return Boolean(0);
  } else {
    return Boolean(1);
  }
}

const isAdultResult = isAdult(age);

console.log('The person is an adult:', isAdultResult);

const student1Score = 98;

function didStudentPass(score) {
  if (score > 70) {
    return true;
  } else {
    return false;
  }
}

const student1Result = didStudentPass(student1Score);

console.log(student1Result);

const student2Score = 105;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else {
    if (score < 70) {
      return 'D';
    } else {
      if (score < 80) {
        return 'C';
      } else {
        if (score < 90) {
          return 'B';
        } else {
          if (score < 100) {
            return 'A';
          } else {
            return 'A++';
          }
        }
      }
    }
  }
}

const student2Result = gradeCalculator(student2Score);

console.log(student2Result);

const season = 'summer';

function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else {
    if (season === 'spring') {
      return 'the flowers are blooming';
    } else {
      if (season === 'autumn') {
        return 'the leaves are changing colors';
      } else {
        if (season === 'winter') {
          return "it's cold today";
        } else {
          return 'please enter a valid season';
        }
      }
    }
  }
}

const seasonResult = seasonMessenger(season);

console.log(seasonResult);

const dayOfTheWeek = 'saturday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return "It's a weekday!";
  }
}

const day = dayDetector(dayOfTheWeek);

console.log(day);
