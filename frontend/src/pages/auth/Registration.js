import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentRegistration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: "",
        documents: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        if (e.target.name === "documents") {
            setFormData({ ...formData, documents: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.course) newErrors.course = "Course is required";
        if (!formData.documents) newErrors.documents = "Document is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("course", formData.course);
        formDataToSend.append("documents", formData.documents);

        try {
            const response = await axios.post("http://localhost:5000/api/register", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Registration successful! Application Number: " + response.data.applicationNumber);
        } catch (error) {
            alert("Error submitting form");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <h2 className="text-center">Student Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Select Course</label>
                        <select name="course" className="form-select" value={formData.course} onChange={handleChange}>
                            <option value="">Choose Course</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Cyber Security">Cyber Security</option>
                        </select>
                        {errors.course && <div className="text-danger">{errors.course}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Upload Documents</label>
                        <input type="file" name="documents" className="form-control" onChange={handleChange} />
                        {errors.documents && <div className="text-danger">{errors.documents}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
            </div>
        </div>
    );
};

export default StudentRegistration;
