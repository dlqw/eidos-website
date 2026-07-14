export type Locale = "en" | "zh-CN";

export interface CodeExample {
  label: string;
  file: string;
  code: string;
  caption: string;
}

interface Feature {
  index: string;
  title: string;
  description: string;
  detail: string;
}

interface Tool {
  name: string;
  role: string;
  description: string;
  href: string;
}

interface Resource {
  kind: string;
  title: string;
  description: string;
  href: string;
}

export interface SiteContent {
  locale: Locale;
  languageName: string;
  nav: Array<{ label: string; href: string }>;
  themeLabel: string;
  menuLabel: string;
  githubLabel: string;
  hero: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    proof: string[];
  };
  code: {
    sectionEyebrow: string;
    sectionTitle: string;
    sectionDescription: string;
    copy: string;
    copied: string;
    copyFailed: string;
    examples: CodeExample[];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: Feature[];
  };
  pipeline: {
    eyebrow: string;
    title: string;
    description: string;
    stages: string[];
    footnote: string;
  };
  tools: {
    eyebrow: string;
    title: string;
    description: string;
    visit: string;
    items: Tool[];
  };
  start: {
    eyebrow: string;
    title: string;
    description: string;
    requirements: string;
    requirementItems: string[];
    commandLabel: string;
    command: string;
    note: string;
    eidosup: string;
  };
  learn: {
    eyebrow: string;
    title: string;
    description: string;
    open: string;
    items: Resource[];
  };
  status: {
    eyebrow: string;
    title: string;
    description: string;
    facts: Array<{ label: string; value: string }>;
    noticeTitle: string;
    notice: string;
  };
  closing: {
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
  footer: {
    description: string;
    explore: string;
    project: string;
    legal: string;
    links: Array<{ label: string; href: string }>;
    copyright: string;
  };
}

const patterns = `Shape :: type
{
    Circle(Int) | Rectangle(Int, Int)
}

area_hint :: Shape -> Int
{
    Circle(radius) => radius * radius,
    Rectangle(width, height) => width * height
}

answer :: area_hint(Rectangle(6, 7));`;

const constGenerics = `Buffer[comptime N: Int, comptime T: Type] :: type
{
    Buffer(T)
}

constant[comptime N: Int] :: Unit -> Int
{
    _ => N
}

answer :: constant[42](());`;

const reflection = `User :: type
{
    name: String
}

Info :: comptime Meta::typeInfo(User);
Kind :: comptime Meta::typeKind(Info);
HasName :: comptime Meta::hasField(User, "name");

deriveModel :: comptime Meta::DeriveInput -> Meta::Expansion
{
    input => Meta::expansion([])
}`;

const quickStart = `git clone https://github.com/dlqw/Eidosc.git
cd Eidosc
dotnet build Eidosc.sln --nologo

dotnet run --project src/Eidosc.Cli -- new hello-eidos --name dev.eidos.hello
dotnet run --project src/Eidosc.Cli -- run hello-eidos`;

export const siteLinks = {
  source: "https://github.com/dlqw/Eidosc",
  issues: "https://github.com/dlqw/Eidosc/issues",
  contributing: "https://github.com/dlqw/Eidosc/blob/main/CONTRIBUTING.md",
  security: "https://github.com/dlqw/Eidosc/blob/main/SECURITY.md",
  license: "https://github.com/dlqw/Eidosc/blob/main/LICENSE",
  tutorialEn: "https://github.com/dlqw/eidos-tutorial/blob/main/README.en.md",
  tutorialZh: "https://github.com/dlqw/eidos-tutorial/blob/main/README.zh-CN.md",
  grammarEn: "https://github.com/dlqw/eidos-tutorial/blob/main/BNF.en.md",
  grammarZh: "https://github.com/dlqw/eidos-tutorial/blob/main/BNF.zh-CN.md",
  architecture: "https://github.com/dlqw/Eidosc/blob/main/docs/architecture/compiler-overview.md",
  eidosup: "https://github.com/dlqw/Eidosc/blob/main/docs/eidosup/bootstrap.md",
  eidosupToolchains: "https://github.com/dlqw/Eidosc/blob/main/docs/eidosup/toolchain-management.md",
  std: "https://github.com/dlqw/Eidosc/tree/main/src/Eidosc/Stdlib/Precompiled/Std",
  bindgen: "https://github.com/dlqw/Eidosc/tree/main/src/Eidosc.Bindgen",
  vscode: "https://github.com/dlqw/vscode-eidosc",
  changelogs: "https://github.com/dlqw/Eidosc/tree/main/changelogs"
};

const links = siteLinks;

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    languageName: "English",
    nav: [
      { label: "Why Eidos", href: "#why" },
      { label: "Language", href: "#language" },
      { label: "Toolchain", href: "#toolchain" },
      { label: "Learn", href: "#learn" },
      { label: "Status", href: "#status" }
    ],
    themeLabel: "Change color theme",
    menuLabel: "Open navigation",
    githubLabel: "View Eidosc on GitHub",
    hero: {
      eyebrow: "Eidos 0.5.0-alpha.1 · Prerelease",
      titleStart: "Give programs a form",
      titleAccent: "you can reason about.",
      description: "Eidos is an experimental, statically typed native language with a functional core, typed compile-time programming, and an integrated LLVM toolchain.",
      primaryAction: "Start the tutorial",
      secondaryAction: "Explore the source",
      proof: ["Name-first syntax", "Typed metaprogramming", "Native LLVM output"]
    },
    code: {
      sectionEyebrow: "The language",
      sectionTitle: "One syntax from values to types.",
      sectionDescription: "Eidos keeps runtime values, compile-time values, and generated declarations inside a typed language instead of splitting them across a separate macro system.",
      copy: "Copy code",
      copied: "Copied",
      copyFailed: "Copy failed",
      examples: [
        { label: "Patterns", file: "Shapes.eidos", code: patterns, caption: "Algebraic data types and pattern branches stay direct and expression-oriented." },
        { label: "Const generics", file: "Buffer.eidos", code: constGenerics, caption: "Value and type domains meet in ordered, typed compile-time parameters." },
        { label: "Reflection", file: "Model.eidos", code: reflection, caption: "Read-only type reflection and structured derives produce checked declarations, not source strings." }
      ]
    },
    features: {
      eyebrow: "Why Eidos",
      title: "Mixed-paradigm by composition, not by exception.",
      description: "A small set of typed mechanisms connects functional expression, systems work, and compile-time generation without hiding the compiler boundary.",
      items: [
        { index: "01", title: "Pattern-first functional core", description: "Algebraic data types, exhaustive patterns, traits, and higher-kinded abstractions form the everyday language.", detail: "Expression-oriented" },
        { index: "02", title: "Types are compile-time values", description: "Typed CTFE and ordered const generics let programs compute with values and types before runtime.", detail: "Pure CTFE" },
        { index: "03", title: "Reflection without runtime magic", description: "The compiler-built-in Meta domain exposes read-only facts and hygienic structured declaration generation.", detail: "Structured derive" },
        { index: "04", title: "Capabilities stay explicit", description: "Build programs declare files, environment, host tools, steps, and outputs. Pure comptime gets no ambient host access.", detail: "Build graphs" },
        { index: "05", title: "Borrow-aware native lowering", description: "References and ownership are analyzed before HIR and MIR become LLVM and native artifacts.", detail: "LLVM backend" },
        { index: "06", title: "One semantic pipeline", description: "Builds, diagnostics, formatting, documentation, IDE snapshots, and LSP features share the same project model.", detail: "CLI + LSP" }
      ]
    },
    pipeline: {
      eyebrow: "Compiler pipeline",
      title: "The form becomes explicit, stage by stage.",
      description: "Eidosc progressively lowers source while preserving the facts needed by diagnostics, tooling, borrow analysis, and native code generation.",
      stages: ["Source", "AST", "Types", "HIR", "MIR", "Borrow", "LLVM", "Native"],
      footnote: "Accepting a target triple is not treated as proof of a complete target toolchain. Eidosup tracks components, runtimes, profiles, and target readiness separately."
    },
    tools: {
      eyebrow: "First-party toolchain",
      title: "A language is more than a parser.",
      description: "The Eidos repositories cover the path from a fresh project to editor feedback, native output, versioned standard library code, and verified toolchain composition.",
      visit: "Open project",
      items: [
        { name: "Eidosc", role: "Compiler", description: "Frontend, type system, HIR/MIR, borrow analysis, LLVM backend, formatter, docs, and language services.", href: links.source },
        { name: "Eidos Std", role: "Standard library", description: "Versioned functional building blocks, containers, text, I/O, FFI, and runtime-facing modules.", href: links.std },
        { name: "Eidosup", role: "Toolchains", description: "Verified immutable toolchains, channels, components, profiles, targets, updates, rollback, and diagnostics.", href: links.eidosupToolchains },
        { name: "Bindgen", role: "C interop", description: "Generates Eidos package bindings from C headers and their extracted declarations.", href: links.bindgen },
        { name: "VS Code", role: "Editor", description: "Syntax, diagnostics, completion, hover, navigation, references, semantic tokens, and formatting.", href: links.vscode }
      ]
    },
    start: {
      eyebrow: "Get started",
      title: "Build the current toolchain from source.",
      description: "Eidos is prerelease software, so the source path is the most transparent way to try the current compiler and project workflow.",
      requirements: "Requirements",
      requirementItems: [".NET SDK 10", "Clang/LLVM for native code generation", "Git"],
      commandLabel: "PowerShell or a compatible shell",
      command: quickStart,
      note: "The generated starter exits successfully without printing. Edit hello-eidos/src/Main.eidos, then run the project again.",
      eidosup: "Read the Eidosup bootstrap and distribution contract"
    },
    learn: {
      eyebrow: "Learn and explore",
      title: "Start with a path that matches your question.",
      description: "The tutorial teaches the language; the BNF defines syntax; architecture and toolchain guides explain how the implementation fits together.",
      open: "Open resource",
      items: [
        { kind: "Tutorial", title: "Learn Eidos in English", description: "A validated guide to syntax, types, patterns, CTFE, reflection, FFI, and the standard library.", href: links.tutorialEn },
        { kind: "教程", title: "简体中文教程", description: "从当前 Eidos 0.5 语法基线开始，结合可验证示例学习语言。", href: links.tutorialZh },
        { kind: "Reference", title: "Grammar and BNF", description: "The compact reference for lexical forms, declarations, expressions, types, patterns, and attributes.", href: links.grammarEn },
        { kind: "Architecture", title: "Inside Eidosc", description: "An orientation guide to compiler stages, projects, packages, language services, caches, and native boundaries.", href: links.architecture },
        { kind: "Toolchains", title: "Eidosup guide", description: "Understand verified releases, installation, channels, dependencies, state, shims, and recovery.", href: links.eidosup },
        { kind: "Project", title: "Changelogs", description: "Versioned notes and in-development fragments for independently released toolchain components.", href: links.changelogs }
      ]
    },
    status: {
      eyebrow: "Project status",
      title: "Built to explore. Honest about the edge.",
      description: "The implementation is active and reproducible, but the language and public tooling contracts have not reached a stable 1.0 boundary.",
      facts: [
        { label: "Language baseline", value: "0.5.0-alpha.1" },
        { label: "Manifest schema", value: "3" },
        { label: "Release policy", value: "Independent components" },
        { label: "License", value: "MIT" }
      ],
      noticeTitle: "Expect deliberate change",
      notice: "Prereleases may contain incompatible syntax, semantic, manifest, diagnostic, or tooling changes. Eidos, Eidosc, Std, Eidosup, Bindgen, and editor integrations use independent version domains."
    },
    closing: {
      title: "Shape the language with us.",
      description: "Try the compiler, reduce a surprising case, improve a tutorial, or bring a focused design proposal. Clear evidence makes the language better.",
      primaryAction: "Contribute to Eidosc",
      secondaryAction: "Open an issue"
    },
    footer: {
      description: "An experimental statically typed native language with a functional core and typed metaprogramming.",
      explore: "Explore",
      project: "Project",
      legal: "Legal",
      links: [
        { label: "Source", href: links.source },
        { label: "Tutorial", href: links.tutorialEn },
        { label: "Grammar", href: links.grammarEn },
        { label: "Contributing", href: links.contributing },
        { label: "Security", href: links.security },
        { label: "MIT License", href: links.license }
      ],
      copyright: "Copyright © 2026 rdququ. Eidosc is available under the MIT License."
    }
  },
  "zh-CN": {
    locale: "zh-CN",
    languageName: "简体中文",
    nav: [
      { label: "为什么选择 Eidos", href: "#why" },
      { label: "语言", href: "#language" },
      { label: "工具链", href: "#toolchain" },
      { label: "学习", href: "#learn" },
      { label: "状态", href: "#status" }
    ],
    themeLabel: "切换颜色主题",
    menuLabel: "打开导航",
    githubLabel: "在 GitHub 查看 Eidosc",
    hero: {
      eyebrow: "Eidos 0.5.0-alpha.1 · 预发布",
      titleStart: "让程序拥有",
      titleAccent: "可以推理的形态。",
      description: "Eidos 是一门处于实验阶段、拥有函数式核心、类型化编译期编程能力和一体化 LLVM 工具链的静态类型原生语言。",
      primaryAction: "开始阅读教程",
      secondaryAction: "浏览源代码",
      proof: ["名称优先语法", "类型化元编程", "LLVM 原生输出"]
    },
    code: {
      sectionEyebrow: "语言",
      sectionTitle: "从值到类型，使用同一套语法。",
      sectionDescription: "Eidos 让运行时值、编译期值和生成声明共同处于类型系统之内，而不是被拆分到另一套宏语言中。",
      copy: "复制代码",
      copied: "已复制",
      copyFailed: "复制失败",
      examples: [
        { label: "模式", file: "Shapes.eidos", code: patterns, caption: "代数数据类型与模式分支保持直接，并自然地参与表达式组合。" },
        { label: "常量泛型", file: "Buffer.eidos", code: constGenerics, caption: "值域与类型域通过有序、带类型的编译期参数相遇。" },
        { label: "反射", file: "Model.eidos", code: reflection, caption: "只读类型反射和结构化 derive 生成经过检查的声明，而不是源代码字符串。" }
      ]
    },
    features: {
      eyebrow: "为什么选择 Eidos",
      title: "通过组合实现混合范式，而不是不断增加例外。",
      description: "一组带类型的基础机制连接函数式表达、系统编程和编译期生成，同时让编译器边界保持清晰。",
      items: [
        { index: "01", title: "以模式为中心的函数式核心", description: "代数数据类型、穷尽模式、trait 和高阶类型抽象构成日常语言。", detail: "面向表达式" },
        { index: "02", title: "类型是一等编译期值", description: "类型化 CTFE 与有序常量泛型让程序在运行前同时计算值与类型。", detail: "纯 CTFE" },
        { index: "03", title: "没有运行时魔法的反射", description: "编译器内建 Meta 域提供只读事实和具备卫生性的结构化声明生成。", detail: "结构化 derive" },
        { index: "04", title: "显式约束宿主能力", description: "构建程序声明文件、环境、工具、步骤和输出；纯编译期求值不会获得环境访问能力。", detail: "Build graph" },
        { index: "05", title: "理解借用的原生降级", description: "引用与所有权先经过分析，随后 HIR 和 MIR 才转化为 LLVM 与原生产物。", detail: "LLVM 后端" },
        { index: "06", title: "共享语义的工具链", description: "构建、诊断、格式化、文档、IDE 快照和 LSP 共享同一个项目模型。", detail: "CLI + LSP" }
      ]
    },
    pipeline: {
      eyebrow: "编译器流水线",
      title: "让程序的形态逐级变得明确。",
      description: "Eidosc 在逐步降低源码层级的同时，保留诊断、工具、借用分析和原生代码生成所需的事实。",
      stages: ["源码", "AST", "类型", "HIR", "MIR", "借用", "LLVM", "原生程序"],
      footnote: "接受一个 target triple 不等于具备完整目标工具链。Eidosup 分别跟踪组件、运行时、profile 和 target 就绪状态。"
    },
    tools: {
      eyebrow: "第一方工具链",
      title: "一门语言远不止一个解析器。",
      description: "Eidos 的公开仓库覆盖从创建项目、编辑器反馈，到原生输出、版本化标准库和可验证工具链组合的完整路径。",
      visit: "打开项目",
      items: [
        { name: "Eidosc", role: "编译器", description: "前端、类型系统、HIR/MIR、借用分析、LLVM 后端、格式化器、文档和语言服务。", href: links.source },
        { name: "Eidos Std", role: "标准库", description: "独立版本化的函数式基础、容器、文本、I/O、FFI 和运行时接口模块。", href: links.std },
        { name: "Eidosup", role: "工具链", description: "经过验证的不可变工具链、通道、组件、profile、target、更新、回滚与诊断。", href: links.eidosupToolchains },
        { name: "Bindgen", role: "C 互操作", description: "根据 C 头文件及其提取声明生成 Eidos 包绑定。", href: links.bindgen },
        { name: "VS Code", role: "编辑器", description: "语法、诊断、补全、hover、跳转、引用、语义 token 与格式化。", href: links.vscode }
      ]
    },
    start: {
      eyebrow: "开始使用",
      title: "从源码构建当前工具链。",
      description: "Eidos 仍是预发布软件，因此从源码开始是体验当前编译器和项目工作流最透明的方式。",
      requirements: "环境要求",
      requirementItems: [".NET SDK 10", "用于原生代码生成的 Clang/LLVM", "Git"],
      commandLabel: "PowerShell 或兼容 shell",
      command: quickStart,
      note: "生成的初始程序会成功退出但不打印内容。修改 hello-eidos/src/Main.eidos 后，再次运行项目即可。",
      eidosup: "阅读 Eidosup 引导与分发契约"
    },
    learn: {
      eyebrow: "学习与探索",
      title: "根据你的问题选择入口。",
      description: "教程负责讲解语言，BNF 定义语法，架构与工具链指南解释实现如何协同。",
      open: "打开资源",
      items: [
        { kind: "教程", title: "简体中文 Eidos 教程", description: "通过可验证示例学习当前语法、类型、模式、CTFE、反射、FFI 和标准库。", href: links.tutorialZh },
        { kind: "Tutorial", title: "English tutorial", description: "A validated path through the current Eidos 0.5 language baseline.", href: links.tutorialEn },
        { kind: "语法参考", title: "BNF 与完整语法", description: "查询词法形式、声明、表达式、类型、模式与 attribute 的紧凑参考。", href: links.grammarZh },
        { kind: "编译器架构", title: "Eidosc 内部结构", description: "了解编译阶段、项目、包、语言服务、缓存和原生边界。", href: links.architecture },
        { kind: "工具链", title: "Eidosup 指南", description: "理解可验证发布、安装、通道、依赖、状态、shim 与恢复过程。", href: links.eidosup },
        { kind: "项目", title: "更新日志", description: "查看各个独立发布工具链组件的版本化说明与开发中 fragment。", href: links.changelogs }
      ]
    },
    status: {
      eyebrow: "项目状态",
      title: "为探索而构建，也诚实面对边界。",
      description: "当前实现持续开发并可复现，但语言和公共工具契约尚未达到稳定的 1.0 边界。",
      facts: [
        { label: "语言基线", value: "0.5.0-alpha.1" },
        { label: "Manifest schema", value: "3" },
        { label: "发布策略", value: "组件独立版本化" },
        { label: "许可证", value: "MIT" }
      ],
      noticeTitle: "预期会发生经过设计的变化",
      notice: "预发布版本可能包含不兼容的语法、语义、manifest、诊断或工具变化。Eidos、Eidosc、Std、Eidosup、Bindgen 与编辑器集成拥有相互独立的版本域。"
    },
    closing: {
      title: "一起来塑造 Eidos。",
      description: "尝试编译器、化简一个意外行为、改进教程，或提出范围明确的设计建议。清晰的证据会让语言变得更好。",
      primaryAction: "参与 Eidosc 贡献",
      secondaryAction: "提交 issue"
    },
    footer: {
      description: "一门拥有函数式核心与类型化元编程能力的实验性静态类型原生语言。",
      explore: "探索",
      project: "项目",
      legal: "规则",
      links: [
        { label: "源代码", href: links.source },
        { label: "教程", href: links.tutorialZh },
        { label: "语法", href: links.grammarZh },
        { label: "参与贡献", href: links.contributing },
        { label: "安全策略", href: links.security },
        { label: "MIT License", href: links.license }
      ],
      copyright: "Copyright © 2026 rdququ。Eidosc 基于 MIT License 开源。"
    }
  }
};
