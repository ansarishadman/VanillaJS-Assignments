async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await response.json();
    const data = json.map((item) => {
        const obj = item;
        return `
        <div>
             <h3>${obj.name}</h3>
             <p>username: ${obj.username}</p>
             <p>email: ${obj.email}</p>
             <div>
                <h5>Address</h5>
                <p>${obj.address.street}${obj.address.suite && `, ${obj.address.suite}`}</p>
                <p>${obj.address.city} ${obj.address.zipcode}</p>
            </div>
      </div>
      <hr/>`;
      })
      .join("");

      document.getElementById("app").innerHTML = data;
}

getData();