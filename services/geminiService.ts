import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS } from '../constants';

const API_KEY = process.env.API_KEY || ''; 

// Construct context string
const SYSTEM_CONTEXT = `
You are an AI assistant for Pranav Dwivedi's personal portfolio website. 
Your goal is to answer questions about Pranav's professional background, skills, and projects based strictly on the following information.
Keep answers concise, professional, and friendly.

PROFILE:
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Summary: ${PERSONAL_INFO.summary}
Email: ${PERSONAL_INFO.email}

SKILLS:
${SKILLS.map(s => `${s.category}: ${s.skills.join(', ')}`).join('\n')}

EDUCATION:
${EDUCATION.map(e => `${e.degree} at ${e.institution} (${e.year})`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS.join('\n')}

PROJECTS:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description.join(' ')}`).join('\n')}

EXPERIENCE:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.duration}): ${e.description[0]}`).join('\n')}

If the user asks for contact info, provide the email.
If the user asks about something not in this resume, politely say you don't have that information.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, my brain (API Key) is missing right now. Please contact Pranav directly!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // We create a new chat for each interaction for simplicity in this stateless service, 
    // or we could maintain chat history in the component. 
    // For a simple Q&A widget, single-turn generation with system instruction is robust.
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_CONTEXT,
      }
    });

    return response.text || "I didn't catch that. Could you try asking differently?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};