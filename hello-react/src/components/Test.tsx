type Person = {
  fName: string;
  lName: string;
  age: number;
};

// type NewStudent = Person & { isVerified: boolean; studentNumber: string };

// type Student = {
//   fName: string;
//   lName: string;
//   age: number;
//   isVerified: boolean;
// };

interface IStudent extends Person {
  studentNumber: string;
  isVerified: boolean;
}

type GreeterFn = (msg: string) => number;

const Test = () => {
  const helloWeb3: string = "Hello Web 3!";
  const numbers: number[] = [1, 2, 3, 4, 5];

  //   const direction: Direction = Direction.LEFT;

  const students: Array<IStudent> = [
    {
      fName: "John",
      lName: "Doe",
      age: 23,
      isVerified: true,
      studentNumber: "test1492842424",
    },
  ];

  const greeter: GreeterFn = (msg) => parseInt(msg, 10);

  greeter("test");

  //   helloWeb3 = 3;

  return (
    <div>
      <p>{helloWeb3}</p>
    </div>
  );
};

export default Test;
