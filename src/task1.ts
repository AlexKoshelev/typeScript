console.log("Задача 1");

interface InputParameters {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}
const totalPrice = (params: InputParameters): number => {
  if (params.isInstallment && params.months) {
    return (
      (params.price - (params.price * params.discount) / 100) / params.months
    );
  } else {
    return params.price - (params.price * params.discount) / 100;
  }
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250

console.log("Конец задачи 1");
