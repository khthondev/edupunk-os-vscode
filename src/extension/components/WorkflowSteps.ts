// src/extension/components/WorkflowSteps.ts

export interface WorkflowStep {
    title: string;
    description?: string;
    iconSVG?: string; // optional: if you want to pass in an SVG for the icon
}

export function WorkflowSteps(steps: WorkflowStep[] = []) {
    // Container
    const container = document.createElement('div');
    container.className = 'workflow-steps-container';

    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'workflow-step';

        // Step Number
        const stepNumber = document.createElement('div');
        stepNumber.className = 'workflow-step-number';
        stepNumber.textContent = `${index + 1}`;
        stepElement.appendChild(stepNumber);

        // Step Content
        const stepContent = document.createElement('div');
        stepContent.className = 'workflow-step-content';

        // Optional icon (if you have an SVG or want to pass one in)
        if (step.iconSVG) {
            const iconWrapper = document.createElement('div');
            iconWrapper.className = 'workflow-step-icon';
            iconWrapper.innerHTML = step.iconSVG; // Insert SVG directly
            stepContent.appendChild(iconWrapper);
        }

        // Title
        if (step.title) {
            const titleElem = document.createElement('h3');
            titleElem.className = 'workflow-step-title';
            titleElem.textContent = step.title;
            stepContent.appendChild(titleElem);
        }

        // Description
        if (step.description) {
            const descElem = document.createElement('p');
            descElem.className = 'workflow-step-description';
            descElem.textContent = step.description;
            stepContent.appendChild(descElem);
        }

        stepElement.appendChild(stepContent);
        container.appendChild(stepElement);
    });

    return container;
}