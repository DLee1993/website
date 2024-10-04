"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormDataSchema } from "../lib/formSchema";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Arrow from "./Arrow";
import { item } from "../lib/framerMotion";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
    {
        id: "Step 1",
        name: "name",
        fields: ["name"],
    },
    {
        id: "Step 2",
        name: "email",
        fields: ["email"],
    },
    {
        id: "Step 3",
        name: "company",
        fields: ["company"],
    },
    {
        id: "Step 4",
        name: "message",
        fields: ["message"],
    },
];
const ContactForm = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [previousStep, setPreviousStep] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageError, setMessageError] = useState(false);
    type FieldName = keyof Inputs;

    const {
        register,
        handleSubmit,
        trigger,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(FormDataSchema),
    });

    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step - 1);
        }
    };

    const next = async () => {
        const fields = steps[currentStep].fields;
        const output = await trigger(fields as FieldName[]);

        if (!output) return;

        if (currentStep === steps.length - 1) {
            await handleSubmit(processForm)();
        } else if (currentStep < steps.length - 1) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step + 1);
        }
    };

    const processForm: SubmitHandler<Inputs> = async (data) => {
        const userTemplate = {
            user_name: data.name,
            user_email: data.email,
            user_company: data.company,
            message: data.message,
        };

        try {
            await emailjs.send(
                `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
                "contact_form",
                userTemplate,
                {
                    publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
                }
            );
            setMessageSuccess(true);
            setCurrentStep(0);
            reset();
        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
                setMessageError(true);
                setCurrentStep(0);
                reset();
                return;
            }

            setMessageError(true);
            setCurrentStep(0);
            reset();
        }
    };

    return (
        <motion.section
            variants={item}
            id="contact"
            className="flex flex-col justify-center items-start"
        >
            {messageSuccess ? (
                <section className="w-full min-h-40 flex flex-col justify-center items-center gap-10">
                    <article className="text-center">
                        <h3 className="text-lg font-bold">Message sent</h3>
                        <p className="text-sm">Please allow 24 hours for a response</p>
                    </article>
                    <button
                        className="customLinkHover min-w-20 ring-[1px] ring-zinc-300/10 text-subText"
                        onClick={() => setMessageSuccess(false)}
                    >
                        Send another message
                    </button>
                </section>
            ) : messageError ? (
                <section className="w-full min-h-40 flex flex-col justify-center items-center gap-5">
                    <article className="text-center">
                        <h3 className="text-lg font-bold">Message unsuccesful</h3>
                        <p className="text-sm">Unfortunately the message could not be sent</p>
                    </article>
                    <button
                        className="customLinkHover min-w-20 ring-[1px] ring-zinc-300/10 text-subText"
                        onClick={() => setMessageError(false)}
                    >
                        Try again
                    </button>
                </section>
            ) : (
                <section className="w-full">
                    <article>
                        <h2 className="text-heading font-medium mb-2">Interested in connecting?</h2>
                        <p className="text-zinc-300 text-subText mb-4">
                            Complete the form below to start a conversation.
                        </p>
                    </article>
                    <form className="mt-10 mb-5" onSubmit={handleSubmit(processForm)}>
                        <section className="w-full h-full border-y-2 border-zinc-800 overflow-hidden">
                            {currentStep === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <fieldset>
                                        <label htmlFor="name" className="sr-only">
                                            Enter your full name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            {...register("name")}
                                            autoComplete="given-name"
                                            placeholder={
                                                errors.name?.message
                                                    ? errors.name?.message
                                                    : "Please enter your full name"
                                            }
                                            className={`inline-block w-full min-h-16 md:min-h-20 lg:min-h-24 text-center px-1.5 bg-transparent text-white autofill:text-base ${
                                                errors.name?.message
                                                    ? "placeholder:text-red-600"
                                                    : "placeholder:text-zinc-400"
                                            }`}
                                        />
                                    </fieldset>
                                </motion.div>
                            )}

                            {currentStep === 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <fieldset>
                                        <label htmlFor="email" className="sr-only">
                                            Enter your email address
                                        </label>
                                        <input
                                            type="text"
                                            id="email"
                                            {...register("email")}
                                            autoComplete="email"
                                            autoFocus
                                            placeholder={
                                                errors.email?.message
                                                    ? errors.email?.message
                                                    : "Please enter your email address"
                                            }
                                            className={`block w-full min-h-16 md:min-h-20 lg:min-h-24 text-center px-1.5 bg-transparent text-white ${
                                                errors.email?.message
                                                    ? "placeholder:text-red-600"
                                                    : "placeholder:text-zinc-400"
                                            }`}
                                        />
                                    </fieldset>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <fieldset>
                                        <label htmlFor="company" className="sr-only">
                                            Enter your company name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            {...register("company")}
                                            autoComplete="company"
                                            autoFocus
                                            placeholder={
                                                errors.company?.message
                                                    ? errors.company?.message
                                                    : "Please enter your company name"
                                            }
                                            className={`block w-full min-h-16 md:min-h-20 lg:min-h-24 text-center px-1.5 bg-transparent text-white ${
                                                errors.company?.message
                                                    ? "placeholder:text-red-600"
                                                    : "placeholder:text-zinc-400"
                                            }`}
                                        />
                                    </fieldset>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <fieldset>
                                        <label htmlFor="message" className="sr-only">
                                            Enter your message
                                        </label>
                                        <input
                                            type="text"
                                            id="message"
                                            {...register("message")}
                                            autoComplete="message"
                                            autoFocus
                                            placeholder={
                                                errors.message?.message
                                                    ? errors.message?.message
                                                    : "Please enter your message"
                                            }
                                            className={`block w-full min-h-16 md:min-h-20 lg:min-h-24 text-center px-1.5 bg-transparent text-white ${
                                                errors.message?.message
                                                    ? "placeholder:text-red-600"
                                                    : "placeholder:text-zinc-400"
                                            }`}
                                        />
                                    </fieldset>
                                </motion.div>
                            )}
                        </section>
                    </form>
                    <nav aria-label="Progress" className="flex justify-end mb-5">
                        <ol role="list" className="w-fit flex gap-x-2">
                            {steps.map((step, index) => (
                                <li key={step.name}>
                                    {currentStep > index ? (
                                        <div
                                            className={`group flex flex-col w-5 h-1.5 rounded-md ${
                                                step.name !== errors
                                                    ? "bg-green-600"
                                                    : "bg-zinc-800"
                                            }`}
                                        ></div>
                                    ) : currentStep === index ? (
                                        <div
                                            className="flex flex-col w-5 h-1.5 rounded-md bg-zinc-600"
                                            aria-current="step"
                                        ></div>
                                    ) : (
                                        <div className="group flex flex-col w-5 h-1.5 rounded-md bg-zinc-800"></div>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                    <section className="flex gap-2">
                        {currentStep !== 0 && (
                            <button
                                type="button"
                                onClick={prev}
                                disabled={currentStep === 0}
                                className="flex justify-evenly items-center customLinkHover min-w-24 pr-4 ring-[1px] ring-zinc-300/10 group"
                            >
                                <div className="rotate-180">
                                    <Arrow />
                                </div>
                                back
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={next}
                            disabled={currentStep === steps.length}
                            className="flex justify-evenly items-center customLinkHover min-w-24 pl-4 ring-[1px] ring-zinc-300/10 group"
                        >
                            next
                            <Arrow />
                        </button>
                    </section>
                </section>
            )}
        </motion.section>
    );
};
export default ContactForm;
