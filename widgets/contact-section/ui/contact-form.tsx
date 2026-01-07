'use client';

import { useState } from 'react';
import { CONTACT_DATA } from '../lib/constants';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        comment: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);

        // Reset form
        setFormData({ name: '', phone: '', comment: '' });
    };

    const { form } = CONTACT_DATA;

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-olive-500/40 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10"
        >
            {/* Name Field */}
            <div className="mb-6">
                <label className="block text-white/80 text-sm mb-2">
                    {form.name.label}
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={form.name.placeholder}
                    className="w-full bg-white rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all"
                    required
                />
            </div>

            {/* Phone Field */}
            <div className="mb-6">
                <label className="block text-white/80 text-sm mb-2">
                    {form.phone.label}
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={form.phone.placeholder}
                    className="w-full bg-white rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all"
                    required
                />
            </div>

            {/* Comment Field */}
            <div className="mb-8">
                <label className="block text-white/80 text-sm mb-2">
                    {form.comment.label}
                </label>
                <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder={form.comment.placeholder}
                    rows={3}
                    className="w-full bg-white rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all resize-none"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-olive-600 hover:bg-olive-700 disabled:bg-olive-400 text-white py-4 rounded-full font-medium transition-all duration-300 mb-4"
            >
                {isSubmitting ? 'Надсилання...' : form.submit}
            </button>

            {/* Disclaimer */}
            <p className="text-white/50 text-xs text-center leading-relaxed">
                {form.disclaimer}
            </p>
        </form>
    );
};
