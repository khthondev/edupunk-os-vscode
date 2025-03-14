// src/webview/pages/LearnTab.ts

import { TextAreaInput } from '../components/TextAreaInput.js';
import { TextCard } from '../components/TextCard.js';
import { ExpandableMenu } from '../components/ExpandableMenu.js';
import { SectionHeader } from '../components/SectionHeader.js';

declare function acquireVsCodeApi(): any;

export function LearnTab() {
  const learnTab = document.createElement('div');
  learnTab.className = 'content home-page';

  const header = SectionHeader();
  learnTab.appendChild(header);

  function createWebviewContent() {
    const root = document.createElement('div');
  
    const menu = ExpandableMenu({
      items: [
        {
          title: '1. Local AI Setup',
          children: [
            { title: '1.1. Environment Configuration', path: '../../curriculum/content/mastery/homebrew-ai/env-configuration.md' },
            { title: '1.2. Model Deployment', path: 'model-deployment.md' },
            { title: '1.3. Basic Functionality', path: 'basic-functionality.md' },
          ],
        },
        {
          title: '2. Optimization & Benchmarking',
          children: [
            { title: '2.1. Quantization Automation', path: 'quantization-automation.md' },
            { title: '2.2. Performance Benchmarking', path: 'performance-benchmarking.md' },
            { title: '2.3. Application Generation', path: 'application-generation.md' },
          ],
        },
        {
          title: '3. Localized Training',
          children: [
            { title: '3.1. Data Preparation', path: 'data-preparation.md' },
            { title: '3.2. Fine-tuning', path: 'fine-tuning.md' },
            { title: '3.3. Evaluation', path: 'evaluation.md' },
          ],
        },
        {
          title: '4. Model Compression Automation',
          children: [
            { title: '4.1. Pruning Implementation', path: 'pruning-implementation.md' },
            { title: '4.2. LoRA Fine-Tuning', path: 'lora-fine-tuning.md' },
            { title: '4.3. Model Validation', path: 'model-validation.md' },
          ],
        },
        {
          title: '5. Edge Deployment',
          children: [
            { title: '5.1. Model Export', path: 'model-export.md' },
            { title: '5.2. Device Deployment', path: 'device-deployment.md' },
            { title: '5.3. Performance Measurement', path: 'performance-measurement.md' },
          ],
        },
        {
          title: '6. Differential Privacy & Security',
          children: [
            { title: '6.1. Privacy Integration', path: 'privacy-integration.md' },
            { title: '6.2. Data Anonymization', path: 'data-anonymization.md' },
            { title: '6.3. Security Practices', path: 'security-practices.md' },
          ],
        },
        {
          title: '7. Reinforcement Learning Integration',
          children: [
            { title: '7.1. RL Setup', path: 'rl-setup.md' },
            { title: '7.2. Adaptive Features', path: 'adaptive-features.md' },
            { title: '7.3. Monitoring & Visualization', path: 'monitoring-visualization.md' },
          ],
        },
        {
          title: '8. UX & Complete Integration',
          children: [
            { title: '8.1. UX Design', path: 'ux-design.md' },
            { title: '8.2. Feature Integration', path: 'feature-integration.md' },
            { title: '8.3. Offline Optimization', path: 'offline-optimization.md' },
          ],
        },
        {
          title: '9. Feedback & Refinement',
          children: [
            { title: '9.1. User Testing Deployment', path: 'user-testing-deployment.md' },
            { title: '9.2. Feedback Analysis', path: 'feedback-analysis.md' },
            { title: '9.3. Continuous Improvement', path: 'continuous-improvement.md' },
          ],
        },
        {
          title: '10. Showcase & Community',
          children: [
            { title: '10.1. Project Documentation', path: 'project-documentation.md' },
            { title: '10.2. Community Engagement', path: 'community-engagement.md' },
            { title: '10.3. Future Directions', path: 'future-directions.md' },
          ],
        },
      ],
      // CHANGE: Update onChildClick to post an "openTab" message.
      onChildClick: (child) => {
        const vscode = acquireVsCodeApi();
        vscode.postMessage({ command: 'openTab', path: child.path });
        // Removed tab switching logic, since a new tab will be opened.
      }
    });
  
    root.appendChild(menu);
    return root;
  }
  learnTab.appendChild(createWebviewContent());

  return learnTab;
}