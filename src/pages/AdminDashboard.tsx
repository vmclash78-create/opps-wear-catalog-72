import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Package, Grid3X3, Image, LogOut, Plus, Pencil, Trash2, Star } from "lucide-react";
import { products, categories, formatPrice } from "@/lib/mock-data";

type Tab = "products" | "categories" | "banners";

const AdminDashboard = () => {
  const [tab, setTab] = useState<Tab>("products");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("opps-admin");
    navigate("/admin");
  };

  const tabs = [
    { key: "products" as Tab, label: "Produtos", icon: Package },
    { key: "categories" as Tab, label: "Categorias", icon: Grid3X3 },
    { key: "banners" as Tab, label: "Banners", icon: Image },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/" className="text-lg font-bold text-foreground">
            Opps <span className="text-gradient">Wear</span>
            <span className="ml-2 text-xs text-muted-foreground">Admin</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <LogOut size={16} />
            Sair
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="mb-8 flex gap-2">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                tab === key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === "products" && (
          <div className="animate-fade-in">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Produtos</h2>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110">
                <Plus size={16} />
                Novo Produto
              </button>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-card">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Produto</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Categoria</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Preço</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-b border-border/30 hover:bg-accent/30">
                      <td className="flex items-center gap-3 px-4 py-3 font-medium text-foreground">
                        {p.featured && <Star size={14} className="text-primary" fill="currentColor" />}
                        {p.name}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{p.category_name}</td>
                      <td className="px-4 py-3 text-foreground">{formatPrice(p.price)}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${p.active ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                          {p.active ? "Ativo" : "Inativo"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="mr-2 text-muted-foreground hover:text-foreground"><Pencil size={14} /></button>
                        <button className="text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "categories" && (
          <div className="animate-fade-in">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Categorias</h2>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110">
                <Plus size={16} />
                Nova Categoria
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between rounded-xl border border-border/50 bg-card p-4">
                  <span className="font-medium text-foreground">{cat.name}</span>
                  <div className="flex gap-2">
                    <button className="text-muted-foreground hover:text-foreground"><Pencil size={14} /></button>
                    <button className="text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "banners" && (
          <div className="animate-fade-in">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Banners</h2>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110">
                <Plus size={16} />
                Novo Banner
              </button>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
              <Image size={40} className="text-muted-foreground/40" />
              <p className="mt-3 text-sm text-muted-foreground">Nenhum banner cadastrado ainda.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
