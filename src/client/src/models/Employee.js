export default class Employee {

        constructor(id, first_name, last_name, email) {
            this.id=id;
            this.name=name;
            this.firstName=first_name;
            this.lastName=last_name;
            this.email=email;
        }

        edit(first_name, last_name, email) {
            this.firstName=first_name;
            this.lastName=last_name;
            this.email=email;
        }
}