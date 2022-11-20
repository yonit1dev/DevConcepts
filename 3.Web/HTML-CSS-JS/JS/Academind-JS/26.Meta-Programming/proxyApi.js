// The Proxy API: create "traps" for object operations. Step in and execute code.

const user = {
  uid: "firstUser01",
  fullName: "First User",
};

const pUserHandler = {
  get(obj, prop) {
    return obj[prop] || "Property Not Found!";
  },
  set(obj, prop, value) {
    const created = Reflect.set(obj, prop, value);
    if (created) {
      console.log("Property set successful!");
    } else {
      console.log("Failed");
    }
  },
};

const pUser = new Proxy(user, pUserHandler);
console.log(pUser.fullName);
console.log(pUser.length);

pUser.age = 22;
console.log(pUser);
