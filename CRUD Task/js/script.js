

const Users=[];

// numberOfUsers();

// EditUserBalanceById();
DeleteUserById();

    function numberOfUsers(){
        var num = Number( prompt("Enter number of users: "));
        for(let i = 0 ; i < num ; i++) {
            addUser();
        }
    } 
    function GetUsers(){
        let Users=JSON.parse(localStorage.getItem('Users'));
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
        localStorage.setItem('Users',JSON.stringify(Users));
    }


    function EditUserBalanceById() {
        let id =prompt('Enter User Id to Edit');
        let newBalance =Number(prompt('Enter new Balance'));
        
        if(newBalance < 0) return;

        let UsersFromLS=JSON.parse(localStorage.getItem('Users'));

        let user =UsersFromLS.find(u=>u.ID == id);
        if(user ==null) return;

        user.Balance=newBalance;
        localStorage.setItem('Users',JSON.stringify(UsersFromLS));
    }

    function DeleteUserById (){
        let id =prompt('Enter User Id to Delete');

        let UsersFromLS=JSON.parse(localStorage.getItem('Users'));

        let Index =UsersFromLS.findIndex(u=>u.ID == id);
        
        if (Index !== -1) 
            UsersFromLS.splice(Index, 1);

        localStorage.setItem('Users',JSON.stringify(UsersFromLS));

        
    }