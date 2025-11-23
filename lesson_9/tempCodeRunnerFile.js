async function showUserNames() {
   try { 
	const response = await fetch ('https://jsonplaceholder.typicode.com/users');
	 if (!response.ok) throw new Error('Сервер упал');
    const data = await response.json();
    const onlyNames = data.map(name => name.name)
		console.log(onlyNames)
  } catch (error) {
    console.log("Ошибка:", error.message);
  }
}

showUserNames()