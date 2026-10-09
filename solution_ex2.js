const hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678'];

// 1. Sua .pop() thanh .shift() de lay xe o dau hang
const xeVaoSac = hangDoiXeCho.shift();
console.log(`Xe dang vao sac: ${xeVaoSac}`);

// 2. Xe moi xep vao cuoi hang
hangDoiXeCho.push('43D-88888');

// 3. Sua i <= length thanh i < length de khong bi loi undefined o cuoi
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}

/*
PHAN TICH LOI:
- Loi 1: Dung hangDoiXeCho.pop() lay nham xe o cuoi hang thay vi xe den truoc.
  -> Sua: Dung hangDoiXeCho.shift() de lay dung xe o dau hang.

- Loi 2: Vong for dung i <= hangDoiXeCho.length lam chay du 1 vong vuot qua so phan tu.
  -> Sua: Doi thanh i < hangDoiXeCho.length de khong in ra "STT 4: undefined".
*/