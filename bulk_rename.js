const fs = require('fs');
const path = require('path');

const baseDir = 'd:/UFS Project/cts-kerala/cts_kerala_student-frontend/src/app';

function replaceInFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
        const regex = new RegExp(r.search, 'g');
        content = content.replace(regex, r.replace);
    });
    fs.writeFileSync(filePath, content);
}

const renames = [
    {
        oldName: 'Approvals',
        newName: 'Recognitions',
        oldClass: 'ApprovalsComponent',
        newClass: 'RecognitionsComponent',
        oldModule: 'ApprovalsModule',
        newModule: 'RecognitionsModule'
    },
    {
        oldName: 'Activities',
        newName: 'Association',
        oldClass: 'ActivitiesComponent',
        newClass: 'AssociationComponent',
        oldModule: 'ActivitiesModule',
        newModule: 'AssociationModule'
    }
];

// 1. Rename folders and files
renames.forEach(r => {
    const oldPath = path.join(baseDir, 'pages', r.oldName);
    const newPath = path.join(baseDir, 'pages', r.newName);

    if (fs.existsSync(oldPath)) {
        // Rename files inside
        const files = fs.readdirSync(oldPath);
        files.forEach(file => {
            const oldFilePath = path.join(oldPath, file);
            const newFile = file.replace(r.oldName, r.newName);
            const newFilePath = path.join(oldPath, newFile);
            fs.renameSync(oldFilePath, newFilePath);
        });
        // Rename folder
        fs.renameSync(oldPath, newPath);
    }
});

// 2. Update content of renamed files
renames.forEach(r => {
    const newPath = path.join(baseDir, 'pages', r.newName);
    if (!fs.existsSync(newPath)) return;
    
    const files = fs.readdirSync(newPath);
    files.forEach(file => {
        const filePath = path.join(newPath, file);
        replaceInFile(filePath, [
            { search: r.oldName, replace: r.newName },
            { search: r.oldClass, replace: r.newClass },
            { search: r.oldModule, replace: r.newModule }
        ]);
    });
});

// 3. Update pages.module.ts
const pagesModulePath = path.join(baseDir, 'pages', 'pages.module.ts');
replaceInFile(pagesModulePath, [
    { search: "'/Approvals'", replace: "'/Recognitions'" },
    { search: "'Approvals'", replace: "'Recognitions'" },
    { search: "'./Approvals/Approvals.module'", replace: "'./Recognitions/Recognitions.module'" },
    { search: "ApprovalsModule", replace: "RecognitionsModule" },
    { search: "'/Activities'", replace: "'/Association'" },
    { search: "'Activities'", replace: "'Association'" },
    { search: "'./Activities/Activities.module'", replace: "'./Association/Association.module'" },
    { search: "ActivitiesModule", replace: "AssociationModule" }
]);

// 4. Update nav-header.component.ts and html
const navHeaderTs = path.join(baseDir, 'components', 'nav-header', 'nav-header.component.ts');
const navHeaderHtml = path.join(baseDir, 'components', 'nav-header', 'nav-header.component.html');

replaceInFile(navHeaderTs, [
    { search: "Approvals_Click", replace: "Recognitions_Click" },
    { search: "Activities_Click", replace: "Association_Click" },
    { search: "'Approvals'", replace: "'Recognitions'" },
    { search: "'Activities'", replace: "'Association'" }
]);

replaceInFile(navHeaderHtml, [
    { search: "Approvals_Click", replace: "Recognitions_Click" },
    { search: "Activities_Click", replace: "Association_Click" },
    { search: "'/Approvals'", replace: "'/Recognitions'" },
    { search: "'/Activities'", replace: "'/Association'" }
]);

// 5. Update other components that might have click handlers
const pagesDir = path.join(baseDir, 'pages');
const allPages = fs.readdirSync(pagesDir);
allPages.forEach(p => {
    const pPath = path.join(pagesDir, p);
    if (fs.lstatSync(pPath).isDirectory()) {
        const pFiles = fs.readdirSync(pPath);
        pFiles.forEach(f => {
            if (f.endsWith('.ts') || f.endsWith('.html')) {
                replaceInFile(path.join(pPath, f), [
                    { search: "Approvals_Click", replace: "Recognitions_Click" },
                    { search: "Activities_Click", replace: "Association_Click" },
                    { search: "'Approvals'", replace: "'Recognitions'" },
                    { search: "'Activities'", replace: "'Association'" }
                ]);
            }
        });
    }
});

console.log('Bulk rename and update complete');
