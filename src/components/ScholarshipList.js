// src/components/ScholarshipList.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ScholarshipList.css';

const scholarships = [
    { id: 1, title: "STEM Women Scholarship", description: "For women in STEM fields.", age: "18-25", field: "STEM", education: "Undergraduate" },
    { id: 2, title: "Women in Business", description: "For aspiring business leaders.", age: "22-30", field: "Business", education: "Graduate" },
    { id: 3, title: "Women in STEM", description: "For aspiring STEM leaders.", age: "22-30", field: "STEM", education: "Graduate" },
    // Additional scholarship entries as needed
];

const ScholarshipList = () => {
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredScholarships = scholarships.filter(scholarship =>
        scholarship.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="scholarship-container">
            <motion.input
                type="text"
                className="search-bar"
                placeholder="Search for scholarships..."
                value={search}
                onChange={handleSearchChange}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8 }}
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
