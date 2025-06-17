# Arabic AI Recommendation System Dataset

## 📌 Project Overview

This project is part of the graduation requirements at Yarmouk University, developed by **Yazeed Al-Suboh** under the supervision of **Dr. Haithem Al-Mefleh**. It addresses the lack of authentic Arabic datasets for AI recommendation systems by collecting real user interaction data from an Arabic news website built specifically for this purpose.

## 🧠 Abstract

Most Arabic AI models rely on translated datasets, leading to loss of cultural and linguistic nuance. This project builds a rich, real-time dataset based on user interactions with a custom Arabic news website. It aims to improve AI recommendation systems by offering authentic, diverse, and labeled Arabic user engagement data.

## 🌐 Website Features

- 🔒 User registration and login
- 📰 Dynamic news articles from an Arabic News API
- 🖱️ Tracks user interactions:
  - Clicks
  - Likes
  - Shares (WhatsApp, Facebook, X, Copy link)
  - Comments
  - Archives
  - Copying text
- 📁 Dataset export as CSV
- 📊 Includes metadata: timestamp, user ID, country, article ID, headline, full content, and event type

## ⚙️ Tech Stack

- **Frontend**: Next.js + MUI (Material UI)  
- **Backend**: Node.js + Express.js  
- **Database**: PostgreSQL + Prisma ORM  
- **Data Collection**: Python (API scraping + preprocessing)  
- **Testing**: Postman  

## 📂 Dataset Structure

| Column Name | Description |
|-------------|-------------|
| `timestamp` | Time of interaction |
| `user_id`   | Unique ID of the user |
| `country`   | User's country |
| `eventType` | Type of interaction (Like, Click, Share, etc.) |
| `article_id`| Article identifier |
| `headline`  | News article title |
| `content`   | Full article text |

## 📈 Impact

The project provides a publicly downloadable dataset useful for training AI recommendation systems focused on Arabic language content. It helps address the critical shortage of culturally and linguistically appropriate Arabic datasets.

## ⚖️ Ethical Considerations

The project uses articles from Arabic news APIs, which may raise content ownership and legal concerns. Future work should explore generating original content to avoid such limitations.

## 📅 Timeline

- Duration: 4 months  
- Key Focus: Dataset design, real-time tracking, and dynamic UI  
- Weekly updates and testing with academic supervision

## 📥 Try It

The website and dataset are available for registered users. Visit the **Dataset Download** page to access real-time collected data in CSV format.

## 📚 References

Key inspirations and related projects:
- 101 Billion Arabic Words Dataset
- ArabicaQA
- OSN-MDAD

---

**Author**: Yazeed Al-Suboh  
**Supervisor**: Dr. Haithem Al-Mefleh  
**University**: Yarmouk University  
**Semester**: First 2024/2025  
**Date**: January 10th, 2025
