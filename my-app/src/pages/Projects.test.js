import { render, screen } from '@testing-library/react';
import Projects, { projects } from './Projects';

afterEach(() => {
  document.body.classList.remove('projectsBody');
});

describe('Projects page', () => {
  test('renders title and project cards', () => {
    render(<Projects />);

    expect(screen.getByRole('heading', { name: /projects and research/i })).toBeInTheDocument();

    projects.forEach((project) => {
      expect(document.getElementById(project.id)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    });
  });
});
