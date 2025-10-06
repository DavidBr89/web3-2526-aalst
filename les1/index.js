console.log("Hallo vanuit Web 3!");

// Producing code
// Code dat een tijdje kan duren
const newPromise = new Promise((resolve, reject) => {
  const isSuccess = false;

  // Simulatie van mijn API call
  setTimeout(() => {
    if (isSuccess) {
      // Data uit API call
      const students = [{ id: 1 }, { id: 2 }];
      resolve(students);
    } else {
      reject("Fout!");
    }
  }, 5000);
});

// Chaining
// const obj = {
//   then: function () {
//     return this;
//   },
//   catch: () => {},
// };

// obj
//   .then()
//   .catch();

// Consuming code
newPromise
  .then((data) => {
    console.log("Promise fulfilled!", data);
  })
  .catch((err) => {
    console.log("Promise rejected", err);
  })
  .finally(() => {
    console.log("Altijd uitgevoerd!");
  });

console.log("Test na Promise");

// Voorbeeld: Simuleren pizzeria
// Pizza klaarmaken - 6s - Altijd succesvol
// Pizza in de oven steken - bakken - 4s - Oven kapot

const preparePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pizza is klaargemaakt!");
  }, 6000);
});

const ovenPromise = new Promise((resolve, reject) => {
  const isOvenBroken = true;

  if (!isOvenBroken) {
    setTimeout(() => {
      resolve("Pizza is klaar. Smakelijk!");
    }, 4000);
  } else {
    reject("Oven kapot");
  }
});

preparePromise
  .then((data) => {
    console.log(data);
    return ovenPromise.catch((err) => console.log(err));
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([preparePromise, ovenPromise])
  .then((data) => {
    const [prepareResult, ovenResult] = data;
  })
  .catch((errors) => {});

// ovenPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ASYNC / AWAIT

const asyncFn = async () => {
  try {
    const prepare = await preparePromise;
    console.log("ASYNC/AWAIT: ", prepare);
    const ovenResult = await ovenPromise;
    console.log("ASYNC/AWAIT: ", ovenResult);
  } catch (error) {
    console.log(error);
  }
};

asyncFn();
