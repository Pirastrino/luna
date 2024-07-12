import { Lucide } from '../../icons';

export default {
  general: {
    name: 'general',
    title: 'General',
    className: 'luna-inspector-tab',
    icon: (
      <div className="luna-inspector-tab__content">
        {Lucide.General}
        <h5>General</h5>
      </div>
    ),
  },
  style: {
    name: 'style',
    title: 'Style',
    className: 'luna-inspector-tab',
    icon: (
      <div className="luna-inspector-tab__content">
        {Lucide.Pallete}
        <h5>Style</h5>
      </div>
    ),
  },
  advanced: {
    name: 'advanced',
    title: 'Advanced',
    className: 'luna-inspector-tab',
    icon: (
      <div className="luna-inspector-tab__content">
        {Lucide.Settings}
        <h5>Advanced</h5>
      </div>
    ),
  },
};
