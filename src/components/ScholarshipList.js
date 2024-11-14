// src/components/ScholarshipList.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ScholarshipList.css';

// Sample scholarship data
const scholarships = [
    { id: 1, title: "STEM Women Scholarship", description: "For women in STEM fields.", age: "18-25", field: "STEM", education: "Undergraduate" },
    { id: 2, title: "Women in Business", description: "For aspiring business leaders.", age: "22-30", field: "Business", education: "Graduate" },
    { id: 3, title: "Women in STEM", description: "For aspiring STEM leaders.", age: "22-30", field: "STEM", education: "Graduate" },
    // Add more scholarship data as needed
];

const ScholarshipList = () => {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        age: "",
        field: "",
        education: ""
    });

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    // Filter scholarships based on search and filter criteria
    const filteredScholarships = scholarships.filter(scholarship =>
        scholarship.title.toLowerCase().includes(search.toLowerCase()) &&
        (filters.age ? scholarship.age === filters.age : true) &&
        (filters.field ? scholarship.field === filters.field : true) &&
        (filters.education ? scholarship.education === filters.education : true)
    );

    return (
        <div className="scholarship-container">
            <div className="filters">
                <h2>Filter Scholarships</h2>
                <label>
                    Age Criteria:
                    <select name="age" value={filters.age} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="18-25">18-25</option>
                        <option value="22-30">22-30</option>
                    </select>
                </label>
                <label>
                    Field of Study:
                    <select name="field" value={filters.field} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="STEM">STEM</option>
                        <option value="Business">Business</option>
                    </select>
                </label>
                <label>
                    Education Level:
                    <select name="education" value={filters.education} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Graduate">Graduate</option>
                    </select>
                </label>
            </div>
            <motion.input
                type="text"
                className="search-bar"
                placeholder="Search scholarships..."
                value={search}
                onChange={handleSearchChange}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <div className="scholarship-list">
                {filteredScholarships.map((scholarship) => (
                    <motion.div
                        className="scholarship-card"
                        key={scholarship.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>{scholarship.title}</h3>
                        <p>{scholarship.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ScholarshipList;
