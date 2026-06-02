import { useEffect, useState, useRef } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [mainOpen, setMainOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  const mainLeaveTimeoutRef = useRef(null);
  const submenuLeaveTimeoutRef = useRef(null);

  const menuItems = [
    {
      id: 'basmati',
      title: 'Indian Basmati Rice',
      path: '/basmati',
      submenu: [
        { title: '1121 Basmati Rice', path: '/basmati/basmati-1121', description: 'Extra-long slender aromatic grains' },
        { title: '1509 Basmati Rice', path: '/basmati/basmati-1509', description: 'Exceptional aroma and rich flavor' },
        { title: '1401 Basmati Rice', path: '/basmati/basmati-1401', description: 'Premium quality parboiled rice' },
        { title: 'Pusa Basmati Rice', path: '/basmati/pusa', description: 'Superb quality and elongation' },
      ]
    },
    {
      id: 'non-basmati',
      title: 'Indian Non Basmati Rice',
      path: '/non-basmati',
      submenu: [
        { title: 'PR 11 Rice', path: '/non-basmati/pr11', description: 'High nutrition everyday rice' },
        { title: 'PR 106 Rice', path: '/non-basmati/pr106', description: 'Great taste and cooking texture' },
        { title: 'IR 64 Rice', path: '/non-basmati/ir64', description: 'Globally popular parboiled rice' },
        { title: 'IR 36 Rice', path: '/non-basmati/ir36', description: 'Rich in fiber and carbohydrates' },
        { title: 'IR 8 Rice', path: '/non-basmati/ir8', description: 'Economical high yield white rice' },
        { title: 'RS 10 Rice', path: '/non-basmati/rs10', description: 'Fluffy and non-sticky grains' },
      ]
    },
    {
      id: 'sugandha',
      title: 'Sugandha Rice',
      path: '/sugandha',
    },
    {
      id: 'sona-masuri',
      title: 'Sona masuri Rice',
      path: '/sona-masuri',
    },
    {
      id: 'sharbati',
      title: 'Sharbati Rice',
      path: '/sharbati',
    },
    {
      id: 'pusa',
      title: 'Pusa Rice',
      path: '/pusa',
    }
  ];

  const clearMainTimeout = () => {
    if (mainLeaveTimeoutRef.current) {
      clearTimeout(mainLeaveTimeoutRef.current);
      mainLeaveTimeoutRef.current = null;
    }
  };

  const clearSubmenuTimeout = () => {
    if (submenuLeaveTimeoutRef.current) {
      clearTimeout(submenuLeaveTimeoutRef.current);
      submenuLeaveTimeoutRef.current = null;
    }
  };

  const handleMainEnter = () => {
    clearMainTimeout();
    setMainOpen(true);
  };

  const handleMainLeave = () => {
    clearMainTimeout();
    mainLeaveTimeoutRef.current = setTimeout(() => {
      setMainOpen(false);
      setActiveSubmenu(null);
      clearSubmenuTimeout();
    }, 200);
  };

  const handleMainItemHover = (itemId) => {
    clearMainTimeout();
    clearSubmenuTimeout();
    setActiveSubmenu(itemId);
  };

  const handleSubmenuLeave = () => {
    clearSubmenuTimeout();
    submenuLeaveTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 200);
  };

  const handleSubmenuEnterDirect = () => {
    clearMainTimeout();
    clearSubmenuTimeout();
  };

  const closeAllMenus = () => {
    setMainOpen(false);
    setActiveSubmenu(null);
    clearMainTimeout();
    clearSubmenuTimeout();
  };

  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearMainTimeout();
      clearSubmenuTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef} 
      className="relative inline-block text-left"
      onMouseEnter={handleMainEnter}
      onMouseLeave={handleMainLeave}
    >
      <button
        onClick={() => setMainOpen(!mainOpen)}
        className="flex items-center gap-[10px] text-black hover:text-[#7A2E45] transition cursor-pointer text-lg xl:text-xl font-semibold leading-none focus:outline-none py-2"
      >
         Products 
        <ChevronDown size={18} className={`transition-transform duration-200 ${mainOpen ? 'rotate-180' : ''}`} />
      </button>

      {mainOpen && (
        <div className="absolute right-0 top-full mt-0 min-w-[280px] w-auto bg-white rounded-lg shadow-xl border border-gray-100 z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => item.submenu ? handleMainItemHover(item.id) : setActiveSubmenu(null)}
                onMouseLeave={handleSubmenuLeave}
              >
                <div className={`flex items-center ${item.submenu ? 'justify-between' : 'justify-start'} px-4 py-3 text-[15px] font-semibold text-gray-800 hover:bg-[#F9F5EF] hover:text-[#7A2E45] cursor-pointer rounded-md transition-all duration-200 group`}>
                  <Link to={item.path} className="flex-grow" onClick={closeAllMenus}>
                    <span>{item.title}</span>
                  </Link>
                  {item.submenu && (
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#7A2E45] transition-colors duration-200" />
                  )}
                </div>
                
                {activeSubmenu === item.id && item.submenu && (
                  <div 
                    className="absolute left-full top-0 ml-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 z-50 animate-in slide-in-from-left-2 duration-200"
                    onMouseEnter={handleSubmenuEnterDirect}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <div className="p-2">
                      <ul className="space-y-1">
                        {item.submenu.map((subitem, index) => (
                          <li key={index}>
                            <Link to={subitem.path}
                              className="block px-3 py-2 text-sm hover:bg-[#F9F5EF] hover:text-[#7A2E45] cursor-pointer rounded-md transition-all duration-200 group"
                              onClick={closeAllMenus}
                            >
                              <div className="font-semibold text-gray-800 group-hover:text-[#7A2E45]">{subitem.title}</div>
                              {subitem.description && (
                                <div className="text-xs text-gray-400 group-hover:text-[#7A2E45]/85 mt-0.5">
                                  {subitem.description}
                                </div>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
