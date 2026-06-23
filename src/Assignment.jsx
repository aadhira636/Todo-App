import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name cannot exceed 15 characters"),

    email: z.string().email("Please enter a valid email"),

    age: z.coerce
      .number()
      .min(18, "Age must be at least 18 years old")
      .max(70, "Age cannot exceed 70"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password cannot exceed 15 characters"),

    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters")
      .max(15, "Confirm Password cannot exceed 15 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function UserForm({ onAddUser }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data) => {
    onAddUser(data); // send valid data up to parent
    reset(); // clear form after successful submit
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add User</h2>

        <input type="text" placeholder="Enter name" {...register("name")} />
        <p style={{ color: "red" }}>{errors?.name?.message}</p>

        <input type="email" placeholder="Enter email" {...register("email")} />
        <p style={{ color: "red" }}>{errors?.email?.message}</p>

        <input type="number" placeholder="Enter age" {...register("age")} />
        <p style={{ color: "red" }}>{errors?.age?.message}</p>

        <input
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />
        <p style={{ color: "red" }}>{errors?.password?.message}</p>

        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />
        <p style={{ color: "red" }}>{errors?.confirmPassword?.message}</p>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

function UserTable({ users }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ textAlign: "center" }}>All Users</h2>

      {users.length === 0 ? (
        <p style={{ textAlign: "center" }}>No users added yet.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (data) => {
    const newUser = { id: Date.now(), ...data };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>User Management</h1>
      <UserForm onAddUser={addUser} />
      <UserTable users={users} />
    </div>
  );
}

export default App;
