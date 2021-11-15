import Map from '.';
import { render, screen } from '@testing-library/react';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);
    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i }),
    );
  });
  it('should render with the marker in correct place according coordinates', () => {
    const place = {
      id: '1',
      name: 'Lençois',
      slug: 'lencois',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };
    const placeTwo = {
      id: '2',
      name: 'Mucugê',
      slug: 'mucuge',
      location: {
        latitude: -30.456,
        longitude: -45.234,
      },
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/lençois/i)).toBeInTheDocument();
    expect(screen.getByTitle(/mucugê/i)).toBeInTheDocument();
  });
});
