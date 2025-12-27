"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEnquiry } from './EnquiryContext';

interface FaqItem {
    question: string;
    answer: string;
    link?: string;
    linkText?: string;
}

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { openModal } = useEnquiry();

    const faqData: FaqItem[] = [
        {
            question: "What happens in Rann Utsav?",
            answer: "Rann Utsav is one of India's most beloved cultural festivals, showcasing the vibrant heritage of Kutch and the natural beauty of the White Desert. The concept was initiated by Shri Narendra Modi during his tenure as Gujarat's Chief Minister.",
            linkText: "Enquire Now"
        },
        {
            question: "Is Rann Utsav worth visiting?",
            answer: "Absolutely! If comfort is a priority, Rann Utsav offers the ideal experience in the Rann of Kutch. Packages include various sightseeing options to nearby attractions like Bhuj, Dhordo, Mandvi Beach, and Dholavira.",
            link: "/gallery",
            linkText: "View Gallery"
        },
        {
            question: "What is the cost of Rann Utsav packages?",
            answer: "The pricing for Rann Utsav packages depends on the type of tent and length of your stay.",
            link: "/packages",
            linkText: "View Packages"
        },
        {
            question: "What is the best time to visit Rann of Kutch?",
            answer: "The winter season is perfect for exploring Kutch, with temperatures ranging from 12 to 25 degrees Celsius, ideal for outdoor activities. It's also when the Rann Utsav Festival takes place.",
            link: "/",
            linkText: "Learn More"
        },
        {
            question: "How do I get to the Rann Utsav Tent City?",
            answer: "The Tent City is accessible via train, road, or air through Bhuj, the closest major city. From Bhuj, you can take a car or bus to Dhordo, where the Tent City is located."
        },
        {
            question: "What adventure activities are available at Rann Utsav?",
            answer: "Visitors can enjoy thrilling experiences such as desert safaris, camel rides, ATV tours, cycling across the White Rann, paramotoring, and hot air ballooning, blending excitement with stunning landscapes."
        },
        {
            question: "Does the Rann Utsav package include meals?",
            answer: "Yes, meals are part of the package. Enjoy breakfast, lunch, evening tea, and dinner featuring a mix of traditional Kutchi, Gujarati, and international cuisines."
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <motion.section
            className="py-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <motion.div
                            className="text-center mb-5"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="display-6 fw-bold mb-3">
                                <span className="text-black">Frequently Asked</span>{' '}
                                <span className="text-primary">Questions</span>
                            </h2>
                            <p className="text-muted">Find answers to common questions about Rann Utsav</p>
                        </motion.div>

                        <motion.div
                            className="accordion"
                            id="faqAccordion"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {faqData.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="accordion-item mb-3 shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="accordion-header">
                                        <button
                                            className={`accordion-button ${activeIndex !== index ? '' : 'collapsed'}`}
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            aria-expanded={activeIndex === index}
                                            aria-controls={`faq-content-${index}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h3>
                                    <div
                                        id={`faq-content-${index}`}
                                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            <p className="mb-3">{faq.answer}</p>
                                            {faq.link ? (
                                                <Link href={faq.link} className="btn btn-outline-primary btn-sm">
                                                    {faq.linkText}
                                                </Link>
                                            ) : faq.linkText === "Enquire Now" ? (
                                                <button onClick={openModal} className="btn btn-outline-primary btn-sm">
                                                    {faq.linkText}
                                                </button>
                                            ) : null}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default FaqSection;