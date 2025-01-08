
# HRM Web System

This is a Human Resource Management (HRM) System designed for handling employee data with three user levels: Admin, Manager, and Employee. The system includes a responsive login page, role-based access control, and a user-friendly interface for managing employee profiles and tasks. The project is designed to be responsive across mobile, tablet, and desktop devices.

## Features
- **Login Page**: A login page with username and password authentication for Admin, Manager, and Employee roles.
- **Responsive Design**: The layout adjusts automatically for mobile, tablet, and desktop devices using media queries and breakpoints.
- **Role-Based Access**:
  - **Admin**: Full access to manage employees, view reports, and perform CRUD operations.
  - **Manager**: Limited access to view employee profiles, manage tasks, and review reports.
  - **Employee**: Ability to view their own profile, attendance, and payroll details.

## Technologies Used
- **Frontend**: HTML, CSS (Flexbox and Grid), Media Queries
- **Backend**: PHP (for user registration)
- **Database**: MySQL

## Database Details

The project uses a MySQL database named `hrm_system` to store user data.

### **Database Schema**

#### **Registration_table**
This table stores user details for the registration process, including username, email, password, and mobile number.

```sql
CREATE TABLE Registration_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- `id`: Auto-incremented primary key.
- `username`: Username of the user.
- `email`: User's email (unique).
- `password`: Hashed password for authentication.
- `mobile_number`: User's mobile number.
- `created_at`: Timestamp when the registration is created.

## How to Set Up

### **1. Clone the Repository**
Clone the project to your local machine:

```bash
git clone https://github.com/ChathuraJayakody/HRM_System.git
```

### **2. Set Up the Database**
- Create a MySQL database named `mobile-computing-assignment`.
- Run the SQL query above to create the `Registration_table`.

### **3. Configure the PHP Backend**
- Make sure your local server (e.g., XAMPP, WAMP) is running.
- Configure the database connection in `register.php` with your MySQL credentials.

### **4. Launch the Application**
Open `index.html` in your browser to access the login page.

## Future Improvements
- Implement features for managing employee tasks and reports in the Admin and Manager panels.
- Add more user fields such as employee roles, departments, and more.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
