

const Users=[];

numberOfUsers();

EditUserBalanceById();
DeleteUserById();

    function numberOfUsers(){
        var num = Number( prompt("Enter number of users: "));
        for(let i = 0 ; i < num ; i++) {
            addUser();
        }
        console.log(Users);
    } 


    function addUser() {
        let name=prompt("Enter Username: ");
        let Id=prompt("Enter UserId: ");
        let Balance=Number(prompt("Enter Balance: "));

        if(Balance < 0) return;

        let user= {
            ID:Id,
            Name:name,
            Balance:Balance
        };
        Users.push(user);
    }


    function EditUserBalanceById() {
        let id =prompt('Enter User Id to Edit');
        let newBalance =Number(prompt('Enter new Balance'));
        
        if(newBalance < 0) return;

        let user =Users.find(u=>u.ID == id);
        if(user ==null) return;

        user.Balance=newBalance;
        console.log(Users);
    }

    function DeleteUserById (){
        let id =prompt('Enter User Id to Delete');
        let Index =Users.findIndex(u=>u.ID == id);
        
        if (Index !== -1) 
            Users.splice(Index, 1);

        console.log(Users);
    }