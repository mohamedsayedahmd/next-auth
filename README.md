√ Would you like to use TypeScript? ... (No) / Yes
√ Would you like to use ESLint? ... No / (Yes)
√ Would you like to use Tailwind CSS? ... No / (Yes)
√ Would you like to use `src/` directory? ... (No) / Yes
√ Would you like to use App Router? (recommended) ... No / (Yes)
? Would you like to customize the default import alias? » (No) / Yes

---

- new folder ./components

---

`npm i next-auth mongoose bcryptjs`

---

.env

- MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.pxnvlhv.mongodb.net/authapp

---

create folder called: lib \
(connect to mongodb)

---

crate new folder with the name models \
create a schema

---

password hasing

```js
import bcrypt from "bcryptjs";
const hashedPassword = await bcrypt.hash(password, 10); // 10 rounds of hashing
```

---

Create new folder called auth \
[...nextauth]
