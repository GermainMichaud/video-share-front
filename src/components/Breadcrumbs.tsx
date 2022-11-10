/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useMatches } from '@tanstack/react-location';

const Breadcrumbs = () => {
  const matches = useMatches();

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <span>Share Video</span>
        </li>
        {matches
          .filter((match) => match.route?.meta?.breadcrumb)
          .map((match) => (
            <li key={match.pathname}>
              {/* <span className="text-sm text-gray-500">{'>'}&nbsp;</span> */}
              <Link to={match.pathname}>
                {(match.route.meta as Record<string, any>)!.breadcrumb(match.params)}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
