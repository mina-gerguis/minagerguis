"use client"

import React, { ComponentPropsWithoutRef } from "react"
import { motion, Transition, Variants } from "framer-motion" // غيرت motion/react → framer-motion (الأكثر شيوعًا)
import "./TextShimmer.css"

interface SpinningTextProps extends ComponentPropsWithoutRef<"div"> {
  children: string | string[]
  duration?: number
  reverse?: boolean
  radius?: number
  transition?: Transition
  variants?: {
    container?: Variants
    item?: Variants
  }
}

const BASE_TRANSITION: Transition = {
  repeat: Infinity,
  ease: "linear",
}

const BASE_ITEM_VARIANTS: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
}

export function SpinningText({
  children,
  duration = 10,
  reverse = false,
  radius = 5,
  transition,
  variants,
  className = "",
  style,
  ...props
}: SpinningTextProps) {
  // التحقق من نوع children
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings")
  }

  let text = Array.isArray(children) ? children.join("") : children
  const letters = text.split("")
  letters.push(" ") // المسافة الإضافية للدوران الجميل

  const finalTransition: Transition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: transition?.duration ?? duration,
  }

  const containerVariants: Variants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  }

  const itemVariants: Variants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  }

  return (
    <motion.div
      className={`spinning-text-container ${className}`}
      style={style}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          className="spinning-letter"
          style={
            {
              "--index": index,
              "--total": letters.length,
              "--radius": radius,
              transform: `
                translate(-50%, -50%)
                rotate(calc(360deg / var(--total) * var(--index)))
                translateY(calc(var(--radius) * -1ch))
              `,
              transformOrigin: "center",
            } as React.CSSProperties
          }
        >
          {letter === " " ? "\u00A0" : letter} {/* للمسافة نستخدم non-breaking space */}
        </motion.span>
      ))}

      {/* النص الحقيقي للـ screen readers */}
      <span className="sr-only">{text}</span>
    </motion.div>
  )
}