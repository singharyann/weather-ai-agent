import 'dotenv/config';
import { Agent, run } from '@openai/agents';
import { tool } from '@openai/agents';
import { z } from 'zod';
import axios from 'axios';

// Define the weather tool
const getWeatherInfoByCityTool = tool({
  name: 'get_weather',
  description: 'Get Weather Info by City Name',
  parameters: z.object({
    city: z.string().describe('City name'),
  }),
  async execute({ city }) {
    console.log(`Executing function get_weather for ${city}`);
    const url = `https://wttr.in/${city.toLowerCase()}?format=%C+%t`;
    const result = await axios.get(url, { responseType: 'text' });
    console.log(`Got the response for ${city}: ${result.data}`);
    return result.data;
  },
});

// Define the customer support agent
const customerSupportAgent = new Agent({
  name: 'Customer Support Agent',
  tools: [getWeatherInfoByCityTool],
  instructions: `
    You are an expert customer support agent which helps users in answering
    their query
  `,
});

// Main function to run the agent
async function main(query = '') {
  try {
    const result = await run(customerSupportAgent, query);
    console.log("Final Answer:", result);
  } catch (error) {
    console.error("Error running agent:", error);
  }
}

// Example run
main("What is the weather in London?");
