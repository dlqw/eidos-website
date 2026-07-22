import abstraction from "./examples/Abstraction.eidos?raw";
import capability from "./examples/Capability.eidos?raw";
import derive from "./examples/Derive.eidos?raw";
import incomplete from "./examples/Incomplete.eidos?raw";
import workflow from "./examples/Workflow.eidos?raw";

export type Locale = "en" | "zh-CN";

export interface CodeExample {
  label: string;
  file: string;
  code: string;
  caption: string;
}

interface LinkItem {
  label: string;
  href: string;
  description?: string;
}

interface ToolItem {
  name: string;
  kind: string;
  version: string;
  description: string;
  href: string;
}

export interface SiteContent {
  locale: Locale;
  nav: Array<{ label: string; href: string }>;
  themeLabel: string;
  menuLabel: string;
  githubLabel: string;
  hero: {
    kicker: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    codeLabel: string;
  };
  release: {
    versionLabel: string;
    version: string;
    statusLabel: string;
    status: string;
    targetLabel: string;
    target: string;
    details: string;
  };
  quickLinks: LinkItem[];
  code: {
    sectionEyebrow: string;
    sectionTitle: string;
    sectionDescription: string;
    copy: string;
    copied: string;
    copyFailed: string;
    examples: CodeExample[];
  };
  principles: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ index: string; title: string; description: string }>;
  };
  diagnostics: {
    eyebrow: string;
    title: string;
    description: string;
    sourceLabel: string;
    outputLabel: string;
    source: string;
    output: string;
    note: string;
  };
  toolchain: {
    eyebrow: string;
    title: string;
    description: string;
    visit: string;
    stagesLabel: string;
    stages: string[];
    items: ToolItem[];
  };
  install: {
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
  packages: {
    eyebrow: string;
    title: string;
    description: string;
    manifestLabel: string;
    manifest: string;
    stdTitle: string;
    stdDescription: string;
    registryTitle: string;
    registryDescription: string;
    links: LinkItem[];
  };
  learn: {
    eyebrow: string;
    title: string;
    description: string;
    open: string;
    items: Array<LinkItem & { kind: string }>;
  };
  status: {
    eyebrow: string;
    title: string;
    description: string;
    facts: Array<{ label: string; value: string }>;
    noticeTitle: string;
    notice: string;
  };
  community: {
    eyebrow: string;
    title: string;
    description: string;
    items: LinkItem[];
  };
  footer: {
    description: string;
    explore: string;
    project: string;
    legal: string;
    links: Array<{ label: string; href: string }>;
    copyright: string;
    closingLine: string;
  };
}

const quickStart = `git clone https://github.com/dlqw/Eidosc.git
cd Eidosc
dotnet build Eidosc.sln --nologo

dotnet run --project src/Eidosc.Cli -- \\
  new hello-eidos --name dev.eidos.hello
dotnet run --project src/Eidosc.Cli -- run hello-eidos`;

const manifest = `manifestSchema = 3
sourceRoots = ["src"]

[language]
version = "0.7.0-alpha.1"

[package]
name = "dev.eidos.example"
version = "0.1.0"`;

const diagnostic = `warning[W4200]: Non-exhaustive pattern matching
  in function 'status'; missing constructors: Failed
  --> Incomplete.eidos:8:1
   |
 8 | status :: Job -> String {
   | ^^^^^^^^^^^^^^^^^^^^^^^^^ pattern coverage
   = note: Missing-case witnesses: Failed`;

export const siteLinks = {
  source: "https://github.com/dlqw/Eidosc",
  releases: "https://github.com/dlqw/Eidosc/releases",
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
  packages: "https://github.com/dlqw/Eidosc/blob/main/docs/architecture/compiler-overview.md#project-and-package-model",
  std: "https://github.com/dlqw/Eidosc/tree/main/src/Eidosc/Stdlib/Precompiled/Std",
  bindgen: "https://github.com/dlqw/Eidosc/tree/main/src/Eidosc.Bindgen",
  vscode: "https://github.com/dlqw/vscode-eidosc",
  neovim: "https://github.com/dlqw/eidosc.nvim",
  jetbrains: "https://github.com/dlqw/jetbrains-eidosc",
  changelogs: "https://github.com/dlqw/Eidosc/tree/main/changelogs"
};

const links = siteLinks;

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    nav: [
      { label: "Language", href: "#language" },
      { label: "Learn", href: "#learn" },
      { label: "Toolchain", href: "#toolchain" },
      { label: "Packages", href: "#packages" },
      { label: "Community", href: "#community" }
    ],
    themeLabel: "Change color theme",
    menuLabel: "Open navigation",
    githubLabel: "View Eidosc on GitHub",
    hero: {
      kicker: "Eidos programming language · 0.7.0-alpha.1",
      title: "A typed native language for programs that reason before they run.",
      description: "Eidos combines an expression-oriented functional core, explicit systems capabilities, and typed compile-time programming in one language. Eidosc lowers the same semantic model to LLVM and editor tooling.",
      primaryAction: "Read the tutorial",
      secondaryAction: "Get the compiler",
      codeLabel: "Generic algebraic data types and exhaustive patterns"
    },
    release: {
      versionLabel: "Language",
      version: "0.7.0-alpha.1",
      statusLabel: "Status",
      status: "Prerelease",
      targetLabel: "Output",
      target: "LLVM / native",
      details: "Read release notes"
    },
    quickLinks: [
      { label: "Learn Eidos", href: links.tutorialEn, description: "Follow the validated language tutorial." },
      { label: "Grammar", href: links.grammarEn, description: "Look up current syntax and BNF." },
      { label: "Install", href: "#install", description: "Build the current compiler from source." },
      { label: "Source", href: links.source, description: "Browse Eidosc and its public roadmap." }
    ],
    code: {
      sectionEyebrow: "The language",
      sectionTitle: "Functional forms, systems boundaries, compile-time code.",
      sectionDescription: "These examples are checked with Eidosc 0.7. They cover the parts of Eidos that shape real programs: data modeling, abstraction, capabilities, and structured metaprogramming.",
      copy: "Copy code",
      copied: "Copied",
      copyFailed: "Copy failed",
      examples: [
        { label: "Data + patterns", file: "Workflow.eidos", code: workflow, caption: "Generic ADTs use comma-separated constructors; guarded and wildcard patterns make state transitions explicit." },
        { label: "Traits + HKT", file: "Abstraction.eidos", code: abstraction, caption: "Higher-kinded constraints describe reusable abstractions, while dot paths select namespaces and members." },
        { label: "Capabilities", file: "Capability.eidos", code: capability, caption: "Runtime effects remain visible in signatures. Calling Console requires the IO capability." },
        { label: "Reflection + derive", file: "Derive.eidos", code: derive, caption: "Read-only reflection and user derives generate checked declarations through the `meta.Type -> meta.Items` protocol—not source strings." }
      ]
    },
    principles: {
      eyebrow: "Why Eidos",
      title: "A small number of rules, used consistently.",
      description: "Eidos is mixed-paradigm because its mechanisms compose. It does not switch to a second language for compile-time work or hide effects behind ambient runtime state.",
      items: [
        { index: "01", title: "Expression-oriented by default", description: "Functions are pattern branches; algebraic data types, exhaustive matching, traits, and higher-kinded constraints form the functional core." },
        { index: "02", title: "Types are compile-time values", description: "Typed CTFE and ordered const generics compute over both value and type domains before runtime." },
        { index: "03", title: "One namespace selector", description: "Packages, modules, types, traits, constructors, and members use dots. The :: token is reserved for declaration binding." },
        { index: "04", title: "Capabilities are named", description: "Effect requirements are part of function types. Pure comptime receives no filesystem, process, environment, network, or FFI access." },
        { index: "05", title: "Generation stays structured", description: "Meta exposes read-only facts and declaration builders. Derives return typed expansions rather than parsing generated text." },
        { index: "06", title: "Native code, shared semantics", description: "The compiler, formatter, diagnostics, IDE snapshots, LSP, borrow analysis, and LLVM lowering use the same project model." }
      ]
    },
    diagnostics: {
      eyebrow: "Compiler feedback",
      title: "Diagnostics point back to the language rule.",
      description: "Eidosc keeps source spans and semantic facts through the pipeline. The same information drives command-line diagnostics and language-server features.",
      sourceLabel: "Input",
      outputLabel: "Eidosc",
      source: incomplete,
      output: diagnostic,
      note: "This is a real 0.6 compiler diagnostic. The missing Failed constructor is reported as a coverage witness."
    },
    toolchain: {
      eyebrow: "Toolchain",
      title: "From source file to native artifact—and back to the editor.",
      description: "The first-party toolchain covers compilation, project manifests, formatting, language services, C interop, standard library code, and verified toolchain composition.",
      visit: "Open",
      stagesLabel: "Compiler stages",
      stages: ["Source", "AST", "Naming", "Types", "HIR", "MIR", "Borrow", "LLVM", "Native"],
      items: [
        { name: "Eidosc", kind: "Compiler", version: "0.7.0-alpha.1 target", description: "Frontend, type system, HIR/MIR, borrow analysis, LLVM backend, CLI, formatter, docs, and LSP.", href: links.source },
        { name: "Eidos Std", kind: "Standard library", version: "0.2.0-alpha.1 target", description: "Versioned functional abstractions, containers, text, I/O, concurrency, FFI, and runtime-facing modules.", href: links.std },
        { name: "Eidosup", kind: "Toolchain manager", version: "Independent version", description: "Verified immutable toolchains, channels, profiles, components, targets, updates, rollback, and diagnostics.", href: links.eidosupToolchains },
        { name: "Eidosc.Bindgen", kind: "C interop", version: "0.2.0-alpha.1 target", description: "Produces Eidos package bindings from extracted C declarations without hand-written path rewrites.", href: links.bindgen },
        { name: "Editor integrations", kind: "VS Code · Neovim · JetBrains", version: "0.7.0-alpha.1 target", description: "Syntax, semantic tokens, diagnostics, completion, hover, navigation, references, formatting, and generated declarations.", href: links.vscode }
      ]
    },
    install: {
      eyebrow: "Get started",
      title: "Build the current compiler from source.",
      description: "Eidos is still prerelease software. The source build is the clearest path to the current language and project workflow while binary distribution matures.",
      requirements: "Requirements",
      requirementItems: [".NET SDK 10", "Clang/LLVM for native code generation", "Git"],
      commandLabel: "PowerShell, Bash, or a compatible shell",
      command: quickStart,
      note: "The generated starter exits successfully without printing. Edit hello-eidos/src/Main.eidos and run the project again.",
      eidosup: "Read the Eidosup bootstrap and distribution contract"
    },
    packages: {
      eyebrow: "Packages and standard library",
      title: "Projects declare their language boundary.",
      description: "Eidos projects use eidos.toml for language, package, source-root, target, dependency, and build-program metadata. Imports then navigate packages and modules with dot namespaces.",
      manifestLabel: "eidos.toml",
      manifest,
      stdTitle: "Versioned standard library",
      stdDescription: "Eidos Std is source-visible and independently versioned. It provides functional traits, persistent and mutable containers, text and JSON, I/O, concurrency primitives, math, FFI, and runtime adapters.",
      registryTitle: "Registry status",
      registryDescription: "A public hosted package registry is not available yet. Current projects use explicit dependency sources and the lockfile records exact resolution. The website does not pretend otherwise.",
      links: [
        { label: "Browse Eidos Std", href: links.std },
        { label: "Read package documentation", href: links.packages },
        { label: "Understand Eidosup toolchains", href: links.eidosupToolchains }
      ]
    },
    learn: {
      eyebrow: "Learn",
      title: "Tutorial first, references when you need them.",
      description: "The public documentation separates guided learning, exact syntax, compiler architecture, and toolchain operations so each page can answer one kind of question well.",
      open: "Open resource",
      items: [
        { kind: "Tutorial", label: "Eidos tutorial", description: "A validated route through bindings, functions, ADTs, patterns, traits, CTFE, reflection, effects, FFI, and Std.", href: links.tutorialEn },
        { kind: "Reference", label: "Grammar and BNF", description: "Current lexical forms, declarations, expressions, types, patterns, imports, and attributes.", href: links.grammarEn },
        { kind: "Architecture", label: "Inside Eidosc", description: "Compiler phases, projects, packages, caches, language services, and native-code boundaries.", href: links.architecture },
        { kind: "Toolchains", label: "Eidosup guide", description: "Verified distributions, installation, channels, dependencies, state, shims, rollback, and recovery.", href: links.eidosup },
        { kind: "Editor", label: "VS Code extension", description: "Install or develop the first-party VS Code language integration.", href: links.vscode },
        { kind: "History", label: "Versioned changelogs", description: "Published notes and in-development fragments for independently released components.", href: links.changelogs }
      ]
    },
    status: {
      eyebrow: "Project status",
      title: "Usable for exploration; not yet a stable 1.0 contract.",
      description: "The compiler and tooling are actively tested and reproducible. Language syntax, semantics, manifests, diagnostics, and distribution details can still change between prereleases.",
      facts: [
        { label: "Language baseline", value: "0.7.0-alpha.1" },
        { label: "Manifest schema", value: "3" },
        { label: "Versioning", value: "Independent components" },
        { label: "License", value: "MIT" }
      ],
      noticeTitle: "What alpha means here",
      notice: "Changes are versioned and documented, but compatibility is not promised across alpha lines. Eidos, Eidosc, Std, Eidosup, Bindgen, and editor integrations each have their own SemVer domain."
    },
    community: {
      eyebrow: "Community",
      title: "Build evidence, improve the language.",
      description: "Good contributions include reduced compiler cases, tested fixes, precise documentation, editor improvements, examples, and focused design proposals grounded in current behavior.",
      items: [
        { label: "Contribute", href: links.contributing, description: "Read the repository workflow, coding rules, and validation expectations." },
        { label: "Report or discuss an issue", href: links.issues, description: "Share a reproducible case, feature proposal, or documentation gap." },
        { label: "Security", href: links.security, description: "Use the documented private reporting route for security-sensitive findings." },
        { label: "MIT License", href: links.license, description: "Read the terms for compiler source, website code, and public brand assets." }
      ]
    },
    footer: {
      description: "A statically typed native language with a functional core and typed metaprogramming.",
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
      copyright: "Copyright © 2026 rdququ. Eidosc is available under the MIT License.",
      closingLine: "Language 0.6 · explicit form, explicit boundaries"
    }
  },
  "zh-CN": {
    locale: "zh-CN",
    nav: [
      { label: "语言", href: "#language" },
      { label: "学习", href: "#learn" },
      { label: "工具链", href: "#toolchain" },
      { label: "包", href: "#packages" },
      { label: "社区", href: "#community" }
    ],
    themeLabel: "切换颜色主题",
    menuLabel: "打开导航",
    githubLabel: "在 GitHub 查看 Eidosc",
    hero: {
      kicker: "Eidos 编程语言 · 0.7.0-alpha.1",
      title: "一门让程序在运行前参与推理的类型化原生语言。",
      description: "Eidos 在同一门语言中组合面向表达式的函数式核心、显式的系统能力与类型化编译期编程。Eidosc 使用同一语义模型驱动 LLVM 降级和编辑器工具。",
      primaryAction: "阅读中文教程",
      secondaryAction: "获取编译器",
      codeLabel: "泛型代数数据类型与穷尽模式"
    },
    release: {
      versionLabel: "语言版本",
      version: "0.7.0-alpha.1",
      statusLabel: "状态",
      status: "预发布",
      targetLabel: "输出",
      target: "LLVM / 原生程序",
      details: "查看更新日志"
    },
    quickLinks: [
      { label: "学习 Eidos", href: links.tutorialZh, description: "按照经过验证的教程学习语言。" },
      { label: "语法参考", href: links.grammarZh, description: "查询当前语法与 BNF。" },
      { label: "安装", href: "#install", description: "从源码构建当前编译器。" },
      { label: "源代码", href: links.source, description: "浏览 Eidosc 与公开开发进度。" }
    ],
    code: {
      sectionEyebrow: "语言",
      sectionTitle: "函数式形态、系统边界与编译期代码。",
      sectionDescription: "以下示例均由 Eidosc 0.7 检查，覆盖真正塑造 Eidos 程序的数据建模、抽象、能力与结构化元编程。",
      copy: "复制代码",
      copied: "已复制",
      copyFailed: "复制失败",
      examples: [
        { label: "数据与模式", file: "Workflow.eidos", code: workflow, caption: "泛型 ADT 使用逗号分隔构造器；guard 与通配模式让状态处理保持显式。" },
        { label: "Trait 与 HKT", file: "Abstraction.eidos", code: abstraction, caption: "高阶类型约束描述可复用抽象；点号统一选择 Namespace 与成员。" },
        { label: "显式能力", file: "Capability.eidos", code: capability, caption: "运行时 effect 会出现在函数签名中；调用 Console 需要 IO 能力。" },
        { label: "反射与 derive", file: "Derive.eidos", code: derive, caption: "只读反射和用户 derive 通过 `meta.Type -> meta.Items` 协议生成经过检查的声明，而不是源代码字符串。" }
      ]
    },
    principles: {
      eyebrow: "为什么选择 Eidos",
      title: "用少量规则构成完整语言。",
      description: "Eidos 的混合范式来自机制的组合，而不是为编译期工作切换到第二门语言，也不会把 effect 隐藏在环境状态中。",
      items: [
        { index: "01", title: "默认面向表达式", description: "函数由模式分支组成；ADT、穷尽匹配、trait 与高阶类型约束共同构成函数式核心。" },
        { index: "02", title: "类型是一等编译期值", description: "类型化 CTFE 与有序常量泛型在运行前同时计算值域和类型域。" },
        { index: "03", title: "一种 Namespace 选择符", description: "包、模块、类型、trait、构造器与成员统一使用点号；:: 只用于声明绑定。" },
        { index: "04", title: "能力必须具名", description: "effect 要求属于函数类型；纯 comptime 不会获得文件、进程、环境、网络或 FFI 访问权。" },
        { index: "05", title: "结构化生成", description: "Meta 提供只读事实与声明构造器；derive 返回类型化 expansion，而不是重新解析文本。" },
        { index: "06", title: "原生代码，共享语义", description: "编译器、格式化器、诊断、IDE 快照、LSP、借用分析与 LLVM 降级共享同一项目模型。" }
      ]
    },
    diagnostics: {
      eyebrow: "编译器反馈",
      title: "诊断直接说明违反了哪条语言规则。",
      description: "Eidosc 在流水线中保留源码跨度与语义事实。同一份信息同时驱动命令行诊断和语言服务器功能。",
      sourceLabel: "输入",
      outputLabel: "Eidosc",
      source: incomplete,
      output: diagnostic,
      note: "这是来自 0.7 编译器的真实诊断。缺失的 Failed 构造器会作为模式覆盖 witness 报告。"
    },
    toolchain: {
      eyebrow: "工具链",
      title: "从源文件走向原生产物，再回到编辑器。",
      description: "第一方工具链覆盖编译、项目 manifest、格式化、语言服务、C 互操作、标准库源码与可验证工具链组合。",
      visit: "打开",
      stagesLabel: "编译阶段",
      stages: ["源码", "AST", "名称解析", "类型", "HIR", "MIR", "借用", "LLVM", "原生程序"],
      items: [
        { name: "Eidosc", kind: "编译器", version: "目标 0.7.0-alpha.1", description: "前端、类型系统、HIR/MIR、借用分析、LLVM 后端、CLI、格式化器、文档与 LSP。", href: links.source },
        { name: "Eidos Std", kind: "标准库", version: "目标 0.2.0-alpha.1", description: "版本化函数式抽象、容器、文本、I/O、并发、FFI 与运行时接口模块。", href: links.std },
        { name: "Eidosup", kind: "工具链管理器", version: "独立版本域", description: "经过验证的不可变工具链、通道、profile、组件、target、更新、回滚与诊断。", href: links.eidosupToolchains },
        { name: "Eidosc.Bindgen", kind: "C 互操作", version: "目标 0.2.0-alpha.1", description: "根据提取后的 C 声明生成 Eidos 包绑定，无需手写限定路径改写。", href: links.bindgen },
        { name: "编辑器集成", kind: "VS Code · Neovim · JetBrains", version: "目标 0.7.0-alpha.1", description: "语法、语义 token、诊断、补全、hover、跳转、引用、格式化与生成声明。", href: links.vscode }
      ]
    },
    install: {
      eyebrow: "开始使用",
      title: "从源码构建当前编译器。",
      description: "Eidos 仍是预发布软件。在二进制分发继续成熟期间，源码构建是体验当前语言和项目工作流最清晰的路径。",
      requirements: "环境要求",
      requirementItems: [".NET SDK 10", "用于原生代码生成的 Clang/LLVM", "Git"],
      commandLabel: "PowerShell、Bash 或兼容 shell",
      command: quickStart,
      note: "生成的初始程序会成功退出但不打印内容。修改 hello-eidos/src/Main.eidos 后，再次运行项目即可。",
      eidosup: "阅读 Eidosup 引导与分发契约"
    },
    packages: {
      eyebrow: "包与标准库",
      title: "项目显式声明自己的语言边界。",
      description: "Eidos 项目通过 eidos.toml 声明语言、包、源码根、target、依赖和构建程序。import 随后使用点号 Namespace 浏览包与模块。",
      manifestLabel: "eidos.toml",
      manifest,
      stdTitle: "独立版本化的标准库",
      stdDescription: "Eidos Std 源码可见且独立版本化，提供函数式 trait、持久化与可变容器、文本与 JSON、I/O、并发原语、数学、FFI 与运行时适配。",
      registryTitle: "Registry 状态",
      registryDescription: "目前还没有公开托管的包 Registry。当前项目使用显式依赖源，lockfile 记录精确解析结果；官网不会虚构尚不存在的服务。",
      links: [
        { label: "浏览 Eidos Std", href: links.std },
        { label: "阅读包文档", href: links.packages },
        { label: "了解 Eidosup 工具链", href: links.eidosupToolchains }
      ]
    },
    learn: {
      eyebrow: "学习",
      title: "先读教程，需要时再查参考。",
      description: "公共文档将引导式学习、精确语法、编译器架构和工具链操作分开，让每一页专注回答一种问题。",
      open: "打开资源",
      items: [
        { kind: "教程", label: "Eidos 中文教程", description: "通过验证示例学习绑定、函数、ADT、模式、trait、CTFE、反射、effect、FFI 与 Std。", href: links.tutorialZh },
        { kind: "参考", label: "语法与 BNF", description: "当前词法形式、声明、表达式、类型、模式、import 与 attribute。", href: links.grammarZh },
        { kind: "架构", label: "Eidosc 内部结构", description: "了解编译阶段、项目、包、缓存、语言服务与原生代码边界。", href: links.architecture },
        { kind: "工具链", label: "Eidosup 指南", description: "可验证分发、安装、通道、依赖、状态、shim、回滚与恢复。", href: links.eidosup },
        { kind: "编辑器", label: "VS Code 扩展", description: "安装或参与开发第一方 VS Code 语言集成。", href: links.vscode },
        { kind: "历史", label: "版本化更新日志", description: "查看各个独立发布组件的正式说明与开发中 fragment。", href: links.changelogs }
      ]
    },
    status: {
      eyebrow: "项目状态",
      title: "可用于探索，但尚未形成稳定的 1.0 契约。",
      description: "当前编译器与工具链持续测试并可复现。语言语法、语义、manifest、诊断和分发细节仍可能在预发布版本间变化。",
      facts: [
        { label: "语言基线", value: "0.7.0-alpha.1" },
        { label: "Manifest schema", value: "3" },
        { label: "版本策略", value: "组件独立版本化" },
        { label: "许可证", value: "MIT" }
      ],
      noticeTitle: "这里的 alpha 意味着什么",
      notice: "变化会被版本化并记录，但不同 alpha 开发线之间不承诺兼容。Eidos、Eidosc、Std、Eidosup、Bindgen 和编辑器集成各自拥有独立 SemVer 版本域。"
    },
    community: {
      eyebrow: "社区",
      title: "用证据推动语言变好。",
      description: "有价值的贡献包括最小化编译器案例、经过测试的修复、准确文档、编辑器改进、示例，以及以当前行为为依据的聚焦设计提案。",
      items: [
        { label: "参与贡献", href: links.contributing, description: "阅读仓库工作流、编码规则与验证要求。" },
        { label: "报告或讨论问题", href: links.issues, description: "提交可复现案例、功能提案或文档缺口。" },
        { label: "安全策略", href: links.security, description: "对安全敏感的问题使用文档规定的私密报告渠道。" },
        { label: "MIT License", href: links.license, description: "查看编译器源码、网站代码与公共品牌资产的许可条款。" }
      ]
    },
    footer: {
      description: "一门拥有函数式核心与类型化元编程能力的静态类型原生语言。",
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
      copyright: "Copyright © 2026 rdququ。Eidosc 基于 MIT License 开源。",
      closingLine: "Language 0.6 · 显式形态，显式边界"
    }
  }
};
